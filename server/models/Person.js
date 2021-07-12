//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type : String, required: true, trim: true},
  birth: { type : Date, required: true, trim: true},
  birthplace: { type: String },
  death: { type : Date, min: this.birth, required: true, trim: true},
  deathPlace: { type: String, required: true },
  nationality: { type : String, required: true, trim: true},
  occupation: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Occupation' }],
  causeOfDeath: { type: mongoose.Schema.Types.ObjectId, ref: 'CauseOfDeath' },
  url: { type : String, required: true, trim: true},
  image: [{ type : Buffer, required: true }]
});

// Compile model from schema
module.exports =  mongoose.model('Person', personSchema);