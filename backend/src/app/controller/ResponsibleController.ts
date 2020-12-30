import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import Responsible from "../models/Responsible";

class ResponsibleController {
  async store(request: Request, response: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required("Name is required."),
    });

    await schema
      .validate(request.body)
      .then(async () => {
        const repository = getRepository(Responsible);

        const { name } = request.body;

        const responsible = repository.create({
          name,
          fkField: request.params.id,
        });

        await repository.save(responsible);

        return response.json({
          message: "Responsible created successfully",
          responsible,
        });
      })
      .catch(error => {
        return response.status(400).json({ error: error.message });
      });
  }
}

export default new ResponsibleController();
