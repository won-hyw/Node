const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()
mongoose.connect(process.env.DB_CONNECTION
    , {useNewUrlParser : true, useUnifiedTopology : true})
const db = mongoose.connection;

db.on('error', function (err) {
    console.log(err)
})

db.once('open', function () {
    console.log('DB 연결')
})

// morgan : HTTP request 기록해주는 미들웨어
app.use(morgan('dev'))

const PORT = process.env.PORT || 3333
app.listen(PORT)