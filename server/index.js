const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const Routes = require('./routes/route')
const cors = require('cors')

const app = express()

dotenv.config()

app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@crud-app.a9wk21e.mongodb.net/${process.env.DB_NAME}`, {
    useUnifiedTopology: true})
.then(() => console.log("DB Connected"))
.catch((err) => console.log(err));


app.use('/', Routes)

app.listen(8000, () => {
    console.log('Server running on port 8000')
})