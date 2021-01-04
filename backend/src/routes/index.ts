import { Router } from "express";

import OwnerController from "../app/controller/OwnerController";
import SessionController from "../app/controller/SessionController";
import FieldController from "../app/controller/FieldController";
import ResponsibleController from "../app/controller/ResponsibleController";
import ContactController from "../app/controller/ContactController";

import authMiddleware from "../middlewares/auth";

const routes = Router();

routes.post("/owner", OwnerController.store);
routes.get("/owner", OwnerController.index);
routes.get("/owner/:id", OwnerController.show);

routes.get("/field", FieldController.index);
routes.get("/field/:id", FieldController.show);

routes.get("/responsible/:id", ResponsibleController.index);

routes.get("/contact/:id", ContactController.index);

routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.delete("/owner", OwnerController.destroy);

routes.post("/field", FieldController.store);
routes.put("/field/:id", FieldController.update);
routes.delete("/field/:id", FieldController.destroy);
routes.get("/fieldOfOwner", FieldController.indexFieldsOfOwner);

routes.post("/responsible/:id", ResponsibleController.store);
routes.delete("/responsible/:id", ResponsibleController.destroy);

routes.post("/contact/:id", ContactController.store);
routes.delete("/contact/:id", ContactController.destroy);

export default routes;
