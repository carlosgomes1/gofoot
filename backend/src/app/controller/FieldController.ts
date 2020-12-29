import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import Field from "../models/Field";

class FieldController {
  async update(request: Request, response: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required("Name is required."),
      logradouro: Yup.string().required("Logradouro is required."),
      number: Yup.string().required("Number is required."),
      complement: Yup.string(),
      latitude: Yup.number().required("Latitude is required."),
      longitude: Yup.number().required("Longitude is required."),
    });

    await schema
      .validate(request.body)
      .then(async () => {
        const repository = getRepository(Field);

        const {
          name,
          logradouro,
          number,
          complement = "",
          latitude,
          longitude,
        } = request.body;

        await repository.update(
          { idField: request.params.id, fkOwner: request.idOwner },
          {
            name,
            logradouro,
            number,
            complement,
            latitude,
            longitude,
          },
        );

        return response.json({ message: "Field successfully changed" });
      })
      .catch(error => {
        return response.status(400).json({ error: error.message });
      });
  }

  async store(request: Request, response: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required("Name is required."),
      logradouro: Yup.string().required("Logradouro is required."),
      number: Yup.string().required("Number is required."),
      complement: Yup.string(),
      latitude: Yup.number().required("Latitude is required."),
      longitude: Yup.number().required("Longitude is required."),
    });

    await schema
      .validate(request.body)
      .then(async () => {
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
      })
      .catch(error => {
        return response.status(400).json({ error: error.message });
      });
  }
}

export default new FieldController();
