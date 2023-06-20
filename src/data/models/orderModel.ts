import { Schema, model}  from "mongoose";

const ordersCollection = "business";

const OrderSchema = new Schema({
    number: {
        type: Schema.Types.Number
    },
    business: {
        type: Schema.Types.ObjectId,
        ref: "business"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    products: {
        type: Schema.Types.Array
    },
    totalPrice: {
        type: Schema.Types.Number
    }
});

export const UserModel = model(ordersCollection, OrderSchema);
