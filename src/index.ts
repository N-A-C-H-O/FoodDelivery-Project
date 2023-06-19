import dotenv from "dotenv";
dotenv.config();

import AppFactory from "./presentation/factories/appFactory.ts";

void (async () => {
    const app = AppFactory.create(process.env.NODE_APPLICATION);
    app.init();
    app.build();
    app.listen();
})();
