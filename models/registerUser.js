import mongoose, { Schema, models } from "mongoose";


const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 15,
      match: [/.+\@.+\..+/,
        "Please enter the correct Address"
      ]
      
    },
    password: {
      type: String,
      required: true,
      unique: true,
      match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/, "Please enter the correct password"]
      
    },
  },
  { timestamps: true }
);

const RegisterUser = models.RegisterUser || mongoose.model("RegisterUser", userSchema);
export default RegisterUser;