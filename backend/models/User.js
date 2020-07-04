const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  street_add:{
    type: String,
    required: true
  },
  ssn:{
    type: Int32Array,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  state:{
    type: String,
    required: true
  },
  zip:{
    type:Int32Array,
    required:true
  },
  dob:{
    type:Date,
    required:true
  },
  equifax:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Equifax'
  }],
  experian:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'experian'
  }],
  transunion:[{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'transunion'
  }]
});

module.exports = User = mongoose.model("RegisterUser", UserSchema);