import { Request, Response } from "express";
import { getRepository } from "typeorm";
import jwt from "jsonwebtoken";

import Owner from "../models/Owner";

import authConfig from "../../config/auth";
import { compareHash } from "../../utils/hash";

class SessionController {
  async store(request: Request, response: Response) {
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
      return response.status(400).json({ error: "Password does not match" });
    }

    return response.json({
      owner,
      token: jwt.sign({ id: owner.idOwner }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
