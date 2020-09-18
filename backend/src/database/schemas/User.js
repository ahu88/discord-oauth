const mongoose = require("mongoose");

//save user info when first time authenticating
//also update existing users if attributes changed
const UserSchema = new mongoose.Schema({
  discordId: {
    type: String,
    required: true,
    unique: true,
  },
  discordTag: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  guilds: {
    type: Array,
    required: true,
  },
});

//compile schema into a model
module.exports = mongoose.model("User", UserSchema); //db collection, schema
