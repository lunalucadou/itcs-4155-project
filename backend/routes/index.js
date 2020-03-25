const router = require('express').Router();



router.use("/", require("./home.js"))
router.use("/accesspoint", require("./accesspoint.js"))



module.exports = router
