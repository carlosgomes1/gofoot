import { Router } from "express";

import OwnerController from "../app/controller/OwnerController";
import SessionController from "../app/controller/SessionController";

const routes = Router();

routes.post("/owner", OwnerController.store);
routes.post("/session", SessionController.store);

export default routes;
