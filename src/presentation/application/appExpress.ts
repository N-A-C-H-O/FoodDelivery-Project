import express from "express";

import businessRouter from "../routes/businessRouter.ts"
import ordersRouter from "../routes/ordersRouter.ts"
import usersRouter from "../routes/usersRouter.ts"

import errorHandler from "../middlewares/errorHandler.ts";

class AppExpress {
    private app = express();
    private PORT = process.env.NODE_PORT;

    init() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    build() {
        this.app.use("/api/business", businessRouter);
        this.app.use("/api/users", usersRouter);
        this.app.use("/api/orders", ordersRouter);
        this.app.use(errorHandler);
    }

    listen() {
        return this.app.listen(this.PORT, () => {
            console.log(`Server listening on port ${this.PORT}`);
        });
    }
}

export default AppExpress;
