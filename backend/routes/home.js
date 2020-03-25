const router = require('express').Router();



// Root route for the entire application, may not be neccessary
router.route('/').get((req, res)=>{
    // .find is a mongoose method that returns items from the mongoose database and returns a promise
    res.send("<p>HOMEPAGE PLACEHOLDER</p>")
});



module.exports = router;
