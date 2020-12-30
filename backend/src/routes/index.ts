import { Router } from "express";

import OwnerController from "../app/controller/OwnerController";
import SessionController from "../app/controller/SessionController";
import FieldController from "../app/controller/FieldController";

import authMiddleware from "../middlewares/auth";

const routes = Router();

routes.post("/owner", OwnerController.store);
routes.get("/owner", OwnerController.index);
routes.get("/owner/:id", OwnerController.show);

routes.get("/field", FieldController.index);
routes.get("/field/:id", FieldController.show);

routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.delete("/owner", OwnerController.destroy);

routes.post("/field", FieldController.store);
routes.put("/field/:id", FieldController.update);

export default routes;
