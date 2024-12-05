const express = require('express')
const router = express.Router()

// randomWYRQestion in wyr_questions made available in index.js
// the .. goes up one directory from roots folder to the random folder which holds wyr_questions
const randomWYRQestion = require('../model/wyr_questions')

// function to handle localhost:3000 homepage
router.get('/', function(req, res, next){
    res.send('Placeholder for homepage') // send text for homepage
})

// this api returns the data in the function - in here, always same
// have a location api - need to include proper info
router.get('/wyr', function(req, res, next){ // api route available at localhost:3000/wyr
    // const wyr = {
    //     'question': 'Live in a circle house or a trinagle house',
    //     'answer1': 'Circle house',
    //     'answer2': 'Triangle house'
    // }

    // send data as a response
    // use res.json
    // take json object or array and turn java into json and send over network and back to client
    const wyr = randomWYRQestion()
    res.json(wyr)
})

module.exports = router