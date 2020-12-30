import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import Contact from "../models/Contact";

class ContactController {
  async index(request: Request, response: Response) {
    const repository = getRepository(Contact);

    const contacts = await repository.findAndCount({
      where: { fkResponsible: request.params.id },
    });

    console.log(`${contacts[1]} contacts were found.`);

    return response.json(contacts);
  }

  async store(request: Request, response: Response) {
    const schema = Yup.object().shape({
      type: Yup.string().required("Type is required."),
      value: Yup.string().required("Value is required."),
    });

    await schema
      .validate(request.body)
      .then(async () => {
        const repository = getRepository(Contact);

        const { type, value } = request.body;

        const contact = repository.create({
          type,
          value,
          fkResponsible: request.params.id,
        });

        await repository.save(contact);

        return response.json({
          message: "Contact created successfully",
          contact,
        });
      })
      .catch(error => {
        return response.status(400).json({ error: error.message });
      });
  }
}

export default new ContactController();
