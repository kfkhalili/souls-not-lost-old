//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const nameSchema = new Schema({
  name: { type : String, required: true, trim: true},
  occupation: { type : String, required: true, trim: true},
  birth: { type : String, required: true, trim: true},
  death: { type : String, required: true, trim: true},
  cause: { type : String, required: true, trim: true},
  article: { type : String, required: true, trim: true},
  media: [{ type : mongoose.Schema.Types.ObjectId, ref: 'SingleFile', required: true }]
});

// Compile model from schema
module.exports =  mongoose.model('Name', nameSchema);