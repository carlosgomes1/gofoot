import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Owner from "../models/Owner";

class OwnerController {
  async store(request: Request, response: Response) {
    const repository = getRepository(Owner);

    const { email, password, whatsapp, uf, city } = request.body;

    const owner = repository.create({
      email,
      password_hash: password,
      whatsapp,
      uf,
      city,
    });

    await repository.save(owner);

    return response.json({ message: "Owner created successfully" });
  }
}

export default new OwnerController();
