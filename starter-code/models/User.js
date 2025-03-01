const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String },
  isAdmin: Boolean,
  googleID: String,
  image: String,
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);
module.exports = User;