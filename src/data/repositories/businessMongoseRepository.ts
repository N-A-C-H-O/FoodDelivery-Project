import BusinessModel from "../models/businessModel";
import Business from "../../domain/entities/business";

class BusinessMongooseRepository {
  async find() {
    const businessDocs = await BusinessModel.find();

    if (!(businessDocs.length > 0)) return null;

    return businessDocs.map((doc) => new Business({ name: doc.name, products: doc.products }));
  }

  async findOne(id: string) {
    const businessDoc = await BusinessModel.findById(id);

    if (!businessDoc) return null;

    return new Business({ name: businessDoc.name, products: businessDoc.products });
  }

  async save(data: object) {
    const newBusinessDoc = new BusinessModel(data);
    await newBusinessDoc.save();

    return true;
  }

  async insertOne(id: string, data: object) {
    const businessDoc = await BusinessModel.findById(id);

    if (!businessDoc) return null;

    businessDoc.products.push(data);

    await BusinessModel.findByIdAndUpdate(id, businessDoc, { new: true });

    return new Business({ name: businessDoc.name, products: businessDoc.products });
  }
}

export default BusinessMongooseRepository;
