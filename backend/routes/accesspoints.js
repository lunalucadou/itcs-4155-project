const router = require('express').Router();
// This is where you pull in the model
let AccessPoints = require('../models/accesspoints.model')



// Root route for the accesspoints
router.route('/').get((req, res)=>{
    // .find is a mongoose method that returns items from the mongoose database and returns a promise
    res.send("<p>ACCESS POINTS PLACHOLDER</p>")
});



// This is the GET request
router.route('/get').get((req, res)=>{
    // .find is a mongoose method that returns items from the mongoose database and returns a promise
    AccessPoints.find()
    // This is called a promise
        .then(accesspoint => res.json(accesspoint))
        .catch(err => res.status(400).json('Error: ' + err))
});



// This is the GET request for specific timestamps
router.route('/get/:time').get((req, res)=>{
    // .find is a mongoose method that returns items from the mongoose database and returns a promise
    var query = AccessPoints.find({"timestamp" : req.params.time})
    // This is called a promise
        .then(query => res.json(query))
        .catch(err => res.status(400).json('Error: ' + err))
});



// This is the POST request
router.route('/add').post((req, res)=>{
    const timestamp = req.body.timestamp;
    const building = req.body.building;
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    const connections = req.body.connections


    const newPoint = new AccessPoints({
        timestamp,
        building,
        latitude,
        longitude,
        connections
    });


    // .save
    newPoint.save()
        .then(()=> res.json('Point added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});


router.route('/addmany').post((req, res)=>{

    // Array of JSON Objects
    if (req.body.batch){
        AccessPoints.create(req.body.batch, function(err){
            if(err)
            res.send(err);

            else
            res.json(req.body);
        });
    }
    // Single JSON Object
    else {
        var newAcc = new AccessPoints(req.body);

        // New accesspoint is saved in the db.
        newAcc.save(function(err){
            if(err)
                res.send(err);

        // If no errors are found, it responds with a JSON of the new user
            else
                res.json(req.body);
        });
    }
});


module.exports = router;
