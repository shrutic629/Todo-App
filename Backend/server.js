const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})