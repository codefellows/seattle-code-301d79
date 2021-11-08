const mongoose = require('mongoose');
require('dotenv').config();
const Cat = require('./models/catModel.js');

// write a function that connects to the db
// uses the `.deleteMany` method on the cat collection with no object properties specified
// disconnect from the db

async function clear() {
  mongoose.connect(process.env.DB_URL);
  try {
    await Cat.deleteMany({});
    console.log('Cats cleared');
  } catch (err) {
    console.error(err)
  } finally {
    mongoose.disconnect();
  }
}

clear();
// to clear the database:
// make sure your server is not running
// in terminal go to project root
// type `node clear.js`