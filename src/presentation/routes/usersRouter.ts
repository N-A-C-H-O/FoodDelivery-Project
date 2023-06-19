import { Router } from "express";

import UsersController from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/", UsersController.get);
usersRouter.get("/:uid", UsersController.getOne);
usersRouter.post("/", UsersController.post);

export default usersRouter;
