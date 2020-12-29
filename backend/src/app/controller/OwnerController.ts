import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import { hashPassword } from "../../utils/hash";

import Owner from "../models/Owner";

class OwnerController {
  async index(request: Request, response: Response) {
    const repository = getRepository(Owner);

    const owners = await repository.findAndCount();
    console.log(`${owners[1]} owners were found.`);

    owners[0].map(owner => delete owner.password_hash);

    response.json(owners);
  }

  async store(request: Request, response: Response) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email("E-mail not valid.")
        .required("E-mail is required."),
      password: Yup.string()
        .min(6, "Password must have at least 6 character")
        .required("Password is required."),
      whatsapp: Yup.string().required("WhatsApp is required."),
      uf: Yup.string().min(2).max(2).required("UF is required."),
      city: Yup.string().required("City is required."),
    });

    await schema.validate(request.body).catch(error => {
      return response.status(400).json({ error: error.message });
    });

    const repository = getRepository(Owner);

    const { email, password, whatsapp, uf, city } = request.body;

    const ownerExists = await repository.findOne({ where: { email } });

    if (ownerExists) {
      return response.status(400).json({ error: "Owner already exists." });
    }

    const password_hash = await hashPassword(password);

    if (!password_hash) {
      return response.status(500).json({ error: "Error on hash password" });
    }

    const owner = repository.create({
      email,
      password_hash,
      whatsapp,
      uf,
      city,
    });

    await repository.save(owner);

    return response.json({ message: "Owner created successfully", owner });
  }

  async destroy(request: Request, response: Response) {
    const repository = getRepository(Owner);

    await repository.delete({ idOwner: request.idOwner });

    return response.json({ message: "The owner was successfully excluded." });
  }
}

export default new OwnerController();
