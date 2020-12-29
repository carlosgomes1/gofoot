import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { hashPassword } from "../../utils/hash";

import Owner from "../models/Owner";

class OwnerController {
  async store(request: Request, response: Response) {
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
}

export default new OwnerController();
