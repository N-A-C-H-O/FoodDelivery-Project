import { createContainer, asClass } from "awilix";

import UserMongooseRepository from "./data/repositories/userMongooseRepository";
import BusinessMongooseRepository from "./data/repositories/businessMongoseRepository";
import OrderMongooseRepository from "./data/repositories/orderMongooseRepository";

const container = createContainer();

container.register("BusinessRepository", asClass(BusinessMongooseRepository).singleton());
container.register("OrderRepository", asClass(OrderMongooseRepository).singleton());
container.register("UserRepository", asClass(UserMongooseRepository).singleton());

export default container;
