import { Router } from "express";

import OwnerController from "../app/controller/OwnerController";

const routes = Router();

routes.post("/owner", OwnerController.store);

export default routes;
