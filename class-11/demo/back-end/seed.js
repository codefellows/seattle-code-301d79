const mongoose = require('mongoose');
require('dotenv').config();
const Cat = require('./models/catModel.js');

// write a function:
// connects to the db
// adds some cats(records)
// disconnects from the db

// call the function

// remember the db methods are async

async function seed() {
  mongoose.connect(process.env.DB_URL);

  const myCat = new Cat({
    name: 'Jimmy John',
    color: 'orange',
    hasClaws: false,
    location: 'Seattle',
  });
  await myCat.save(function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('saved my cat, Jimmy John');
    }
  })

  // alternatively
  await Cat.create({
    name: 'Jersey  Mike',
    color: 'calico',
    hasClaws: true,
    location: 'Paris'
  });
  console.log('saved Jersey Mike');

  mongoose.disconnect();
}

seed();

// to seed the database:
// make sure your server is not running
// in terminal go to project root
// type `node seed.js`