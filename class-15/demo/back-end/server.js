'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const verifyUser = require('./auth');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(cors());
app.use(express.json()); // needed for labs 12 and 13

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected!');
});
const Book = require('./models/book.js');


// routes
app.get('/books', getBooks); // lab 11
app.post('/books', createBook); // lab 12
app.delete('/books/:id', deleteBook); // lab 12
app.put('/books/:id', updateBook); // lab 13
app.get('/user', getUser);// lab 14


// route handlers

// lab 11
function getBooks(request, response) {

  verifyUser(request, async (err, user) => {
    if (err) {
      response.send('invalid token');
    } else {
      try {
        const books = await Book.find({ email: user.email });
        response.send(books);
      } catch (error) {
        console.error(error);
        response.status(400).send('Could not find books');
      }
    }
  })
}

// lab 12
async function createBook(request, response) {
  try {
    const book = await Book.create(request.body)
    response.send(book);
  } catch (error) {
    console.error(error);
    response.status(400).send('unable to create book');
  }
}

// lab 12
function deleteBook(request, response) {

  verifyUser(request, async (err, user) => {
    if (err) {
      response.send('invalid token');
    } else {
      try {
        const email = user.email;
        const id = request.params.id;
    
        const book = await Book.findOne({ _id: id, email });
    
        if (!book) {
          response.status(400).send('unable to delete book');
          return;
        }
    
        if (book.email !== email) {
          response.status(400).send('unable to delete book');
          return;
        }
    
        await Book.findByIdAndDelete(id);
        response.send('success');
    
      } catch (error) {
        console.error(error);
        response.status(400).send('unable to delete book');
      }
    }
  })

}

// lab 13
async function updateBook(request, response) {

  const id = request.params.id;
  const email = request.query.email;

  try {
    const bookToUpdate = await Book.findOne({ _id: id, email });

    if (!bookToUpdate) {
      response.status(400).send('unable to update book');
      return;
    }

    const updatedBook = await Book.findByIdAndUpdate(id, request.body, { new: true });

    response.send(updatedBook);

  } catch (error) {
    console.error(error);
    response.status(400).send('unable to update book');
  }
}

// lab 14 - Auth
function getUser(request, response) {

  verifyUser(request, (err, user) => {
    if (err) {
      response.send('invalid token');
    } else {
      response.send(user);
    }
  })
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));