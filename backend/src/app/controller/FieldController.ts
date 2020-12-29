import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Field from "../models/Field";

class FieldController {
  async create(request: Request, response: Response) {
    const repository = getRepository(Field);

    const {
      name,
      logradouro,
      number,
      complement = "",
      latitude,
      longitude,
    } = request.body;

    const field = repository.create({
      name,
      logradouro,
      number,
      complement,
      latitude,
      longitude,
      fkOwner: request.idOwner,
    });

    await repository.save(field);

    return response.json({ message: "Field created successfully.", field });
  }
}

export default new FieldController();
