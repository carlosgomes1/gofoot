import { Router } from "express";

import OwnerController from "../app/controller/OwnerController";
import SessionController from "../app/controller/SessionController";

import authMiddleware from "../middlewares/auth";

const routes = Router();

routes.post("/owner", OwnerController.store);
routes.get("/owner", OwnerController.index);

routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.delete("/owner", OwnerController.destroy);

export default routes;
