import UserModel from "../models/userModel";
import User from "../../domain/entities/user";

class UserMongooseRepository {
  async find() {
    const userDocs = await UserModel.find();

    if (!(userDocs.length > 0)) return null;

    return userDocs.map(
      (doc) =>
        new User({
          firstName: doc.firstName,
          lastName: doc.lastName,
          email: doc.email,
          role: doc.role,
          orders: doc.orders,
        })
    );
  }

  async findOne(id: string) {
    const userDoc = await UserModel.findById(id);

    if (!userDoc) return null;

    return new User({ firstName: userDoc.firstName, lastName: userDoc.lastName, email: userDoc.email, role: userDoc.role, orders: userDoc.orders });
  }

  async save(data: object) {
    const newBusinessDoc = new UserModel(data);
    await newBusinessDoc.save();

    return true;
  }

  async update(id: string, data: object) {
    const userDoc = await UserModel.findByIdAndUpdate(id, data, { new: true });

    if (!userDoc) return null;

    return new User({ firstName: userDoc.firstName, lastName: userDoc.lastName, email: userDoc.email, role: userDoc.role, orders: userDoc.orders });
  }
}

export default UserMongooseRepository;
