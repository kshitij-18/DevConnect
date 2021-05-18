const express = require('express')
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API running'))

// Connecting to the Database
const url = `mongodb+srv://kshitij:${process.env.DB_PASSWORD}@cluster0.ihxoq.mongodb.net/DEVDB?retryWrites=true&w=majority`
mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Database Connected")).catch(err => console.log("Could not connect to DB"))

app.listen(PORT, () => console.log("Listening on port " + PORT))