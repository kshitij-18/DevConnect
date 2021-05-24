const express = require('express')
const app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')
const postRoutes = require('./routes/posts')

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json())
app.use(cors())
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/posts', postRoutes)

// Connecting to the Database
const url = `mongodb+srv://kshitij:${process.env.DB_PASSWORD}@cluster0.ihxoq.mongodb.net/DEVDB?retryWrites=true&w=majority`
mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => console.log("Database Connected")).catch(err => console.log("Could not connect to DB"))

app.listen(PORT, () => console.log("Listening on port " + PORT))