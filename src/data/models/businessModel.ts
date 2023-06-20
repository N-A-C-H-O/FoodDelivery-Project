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

const BusinessModel = model(businessCollection, BusinessSchema);

export default BusinessModel;
