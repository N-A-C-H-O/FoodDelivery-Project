import container from "../../container";

class OrdersManager {
    private repository = container.resolve("OrdersRepository");

    async list() {
    }

    async getOne(id: string) {
    }

    async createOne(data: object) {
    }

    async resolveOne(id: string, data: object) {
    }
}

export default OrdersManager;
