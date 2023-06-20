import { Schema, model}  from "mongoose";

const usersCollection = "users";

const UserSchema = new Schema({
    firstName: {
        type: Schema.Types.String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: Schema.Types.String,
        required: [true, "Last name is required"]
    },
    email: {
        type: Schema.Types.String,
        required: [true, "Email is required"],
        unique: true
    },
    role: {
        type: Schema.Types.String,
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Orders"
    }]
});

export const UserModel = model(usersCollection, UserSchema);
