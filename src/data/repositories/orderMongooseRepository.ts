import OrderModel from "../models/orderModel";
import Order from "../../domain/entities/order";

class OrderMongooseRepository {
  async find() {
    const orderDocs = await OrderModel.find();

    if (!(orderDocs.length > 0)) return null;

    return orderDocs.map(
      (doc) =>
        new Order({
          number: doc.number,
          business: doc.business,
          user: doc.user,
          products: doc.products,
          totalPrice: doc.totalPrice,
        })
    );
  }

  async findOne(id: string) {
    const orderDoc = await OrderModel.findById(id);

    if (!orderDoc) return null;

    return new Order({ number: orderDoc.number, business: orderDoc.business, user: orderDoc.user, products: orderDoc.products, totalPrice: orderDoc.totalPrice });
  }

  async save(data: object) {
    const newOrderDoc = new OrderModel(data);
    await newOrderDoc.save();

    return true;
  }

  async update(id: string, data: object) {
    const orderDoc = await OrderModel.findByIdAndUpdate(id, data, { new: true });

    if (!orderDoc) return null;

    return new Order({ number: orderDoc.number, business: orderDoc.business, user: orderDoc.user, products: orderDoc.products, totalPrice: orderDoc.totalPrice });
  }
}

export default OrderMongooseRepository;
