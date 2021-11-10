'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/bookModel.js')

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// set up routes for books
// get, post, delete
// follow the correct nstructions



app.get('/', (req, res) => res.send('hello'));
app.get('/books', handleGetBooks);
app.delete('/books/:id', handleDeleteBooks);
app.post('/books', handlePostBooks);
app.put('/books/:id', handlePutBooks);



async function handleGetBooks(req, res) {
  // expecting client will send email! as a req.query
  const email = req.query.email;
  try {
    const books = await Book.find({ email })
    if (books) {
      res.status(200).send(books);
    } else {
      res.status(404).send('no books for you');
    }
  } catch (e) {
    console.log(e);
    res.status(500).send('server error');
  }
}

async function handlePostBooks(req, res) {
  // expecting client to send me: email in query and book details in the body
  // req.body = { title: title, author: author, description: description, status: status}
  // console.log(req.body)
  // req.query = { email: email }
  // console.log(req.query.email)
  const newBook = { ...req.body, email: req.query.email }
  // use mongoose to create a new Book record with the new book
  try {
    const successfulBook = await Book.create(newBook);
    if (successfulBook) {
      res.status(201).send(successfulBook);
    } else {
      res.status(400).send('could not add book');
    }

  } catch (e) {
    console.log(e);
    res.status(500).send('server error');
  }
}

async function handleDeleteBooks(req, res) {
  // it will take some id(params) and your email(query)
  // do I have a book where the id and the email address exist on one record together
  const id = req.params.id;
  const email = req.query.email;

  try {
    const book = await Book.findOne({ _id: id, email: email });
    if (!book) {
      // sorry no book deletion (we couldn't find a book with that match)
      res.status(400).send('could not delete book');
    } else {
      await Book.findByIdAndDelete(id);
      res.status(204).send('bye book');
    }
  } catch (e) {
    console.log(e);
    res.status(500).send('server error');
  }
}

async function handlePutBooks(req, res) {
  /// user is going to send us their email(query) and id(param) new book state via req.body
  // findByIdAndUpdate takes some arguments
  // 1 - the id of the record you want to change
  // 2 - the data you want to replace
  // 3 - optional - make it completey replace the entry { new: true, overwrite: true }
  const id = req.params.id;
  const updatedData = { ...req.body, email: req.query.email }
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true, overwrite: true });
    // const updatedBook = await Book.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).send(updatedBook)
  } catch (e) {
    console.log(e);
    res.status(500).send('server error');
  }

}






// connect to mongoose
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});






app.listen(PORT, () => console.log(`Listening on ${PORT}`));





