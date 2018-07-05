const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items.js');


const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// DB config
const URI = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(URI).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))


