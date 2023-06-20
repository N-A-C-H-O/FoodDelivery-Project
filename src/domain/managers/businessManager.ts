import container from "../../container";

class BusinessManager {
    private repository = container.resolve("BusinessRepository");

    async list() {
    }

    async getOne(id: string) {
    }

    async addOne(data: object) {
    }

    async updateOne(id: string, data: object) {
    }
}

export default BusinessManager;