const express = require('express')

const indexRouter = require('./roots/index')

const app = express() // set up the app

app.use('/', indexRouter) // everything sent to index router to be handled

const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port ', server.address().port)
})