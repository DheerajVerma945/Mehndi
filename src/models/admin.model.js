import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    profilePic:{
        type:String,
        required:true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;