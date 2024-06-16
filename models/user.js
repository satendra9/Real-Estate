import mongoose, {Schema, models} from "mongoose";

const userSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
   contact: {
        type: Number,
        required: true
   }
},
{timestamps: true}
);

const User = models.User || mongoose.model("User", userSchema);
export default User;