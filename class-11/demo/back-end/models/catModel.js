'use strict';
const mongoose = require('mongoose');

// make a new instance of a schema and define the shape of your data record

// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

// see mongoose for more 'types' of values https://mongoosejs.com/docs/schematypes.html

const catSchema = new mongoose.Schema({
  name: String,
  color: String,
  hasClaws: Boolean,
  location: String
});

// create a model to export that you will use to make all instances of this collection

const Cat = mongoose.model('Cats', catSchema);

module.exports =  Cat;