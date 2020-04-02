const router = require('express').Router();
// This is where you pull in the model
let AccessPoint = require('../models/accesspoint.model')



// Root route for the accesspoints
router.route('/').get((req, res)=>{
    // .find is a mongoose method that returns items from the mongoose database and returns a promise
    res.send("<p>ACCCESS POINTS PLACHOLDER</p>")
});

// This is the GET request
router.route('/get').get((req, res)=>{
    // .find is a mongoose method that returns items from the mongoose database and returns a promise
    AccessPoint.find()
    // This is called a promise
        .then(accesspoint => res.json(accesspoint))
        .catch(err => res.status(400).json('Error: ' + err))
});

// This is the POST request
router.route('/add').post((req, res)=>{
    const id = req.body.id;
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    const time = Date.parse(req.body.time)


    const newPoint = new AccessPoint({
        id,
        latitude,
        longitude,
        time
    });


    // .save
    newPoint.save()
        .then(()=> res.json('Point added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});



module.exports = router;
