const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, min: 3, required: true, unique: true },
    password: { type: String, min: 4, max: 16, required: true },
    status: { type: Number },
    age: { type: Number },
    phone: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("user", UserSchema);
