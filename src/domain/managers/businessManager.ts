import container from "../../container";

class BusinessManager {
    private repository = container.resolve("BusinessRepository");

    async list() {
        return this.repository.find();
    }

    async getOne(id: string) {
        return this.repository.find(id);
    }

    async create(data: object) {
        return this.repository.save(data);
    }

    async addProduct(id: string, data: object) {
        return this.repository.insertOne(id, data);
    }
}

export default BusinessManager;