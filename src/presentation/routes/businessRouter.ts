import { Router } from "express";

import BusinessController from "../controllers/businessController";

const businessRouter = Router();

businessRouter.get("/", BusinessController.get);
businessRouter.get("/:bid", BusinessController.getOne);
businessRouter.post("/", BusinessController.post);
businessRouter.post("/:bid/product", BusinessController.postOne);

export default businessRouter;
