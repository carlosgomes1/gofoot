import { Request, Response } from "express";
import { getRepository } from "typeorm";
import jwt from "jsonwebtoken";
import * as Yup from "yup";

import Owner from "../models/Owner";

import authConfig from "../../config/auth";
import { compareHash } from "../../utils/hash";

class SessionController {
  async store(request: Request, response: Response) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email("E-mail not valid.")
        .required("E-mail is required."),
      password: Yup.string()
        .min(6, "Password must have at least 6 character")
        .required("Password is required."),
    });

    await schema
      .validate(request.body)
      .then(async () => {
        const repository = getRepository(Owner);

        const { email, password } = request.body;

        const owner = await repository.findOne({
          where: {
            email,
          },
        });

        if (!owner) {
          return response.status(401).json({ error: "Owner not found" });
        }

        const passwordMatch = await compareHash(password, owner.password_hash);

        if (!passwordMatch) {
          return response
            .status(400)
            .json({ error: "Password does not match" });
        }

        delete owner.password_hash;

        return response.json({
          owner,
          token: jwt.sign({ id: owner.idOwner }, authConfig.secret, {
            expiresIn: authConfig.expiresIn,
          }),
        });
      })
      .catch(error => {
        return response.status(400).json({ error: error.message });
      });
  }
}

export default new SessionController();
