const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');


const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// DB config
const URI = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(URI).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));

app.use('/api/items', items);

// Serve static assets if we are in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static('client/build'));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))


