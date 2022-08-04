const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email:{
        type:String,
    },
    company:{
        type:String
    },
    state:{
        type:String
    }
  }
 
);

module.exports = mongoose.model("file", csvSchema);