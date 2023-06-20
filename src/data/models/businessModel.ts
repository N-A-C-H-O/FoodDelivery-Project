import { Schema, model}  from "mongoose";

const businessCollection = "business";

const BusinessSchema = new Schema({
    name: {
        type: Schema.Types.String,
    },
    products: {
        type: Schema.Types.Array
    }
});

export const UserModel = model(businessCollection, BusinessSchema);
