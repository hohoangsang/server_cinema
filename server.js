const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./src/config/keys').mongoURI

const app = express();

//Body-parser Middleware
app.use(bodyParser.json());

//Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));