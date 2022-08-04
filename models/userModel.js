const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
