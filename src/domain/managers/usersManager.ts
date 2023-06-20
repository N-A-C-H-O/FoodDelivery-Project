import container from "../../container";

class UsersManager {
    private repository = container.resolve("UsersRepository");

    async list() {
    }

    async getOne(id: string) {
    }

    async addOne(data: object) {
    }

    async updateOne(id: string, data: object) {
    }
}

export default UsersManager;
