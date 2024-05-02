const bodyParser = require('body-parser')
const cors = require('cors')
// const express = require('express')
// const app = express()

// app.use(bodyParser)

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors({
        origin: '*'
    }))
}