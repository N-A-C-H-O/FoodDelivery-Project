import { Router } from "express";

import OrdersController from "../controllers/ordersController";

const ordersRouter = Router();

ordersRouter.get("/", OrdersController.get);
ordersRouter.get("/:oid", OrdersController.getOne);
ordersRouter.post("/", OrdersController.post);
ordersRouter.put("/:oid", OrdersController.put);

export default ordersRouter;
