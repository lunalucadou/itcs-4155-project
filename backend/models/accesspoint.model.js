// General code across all schemas
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Specific code for this schema
const testSchema = new Schema({
    point: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Will trim off the whitespaces
        minlength: 2
    },
    building: {
        type: String,
        required: false,
        unique: false,
        trim: true, // Will trim off the whitespaces
        minlength: 2
    }
}, {
    timestamp: true,
})

const AccessPoint = mongoose.model('AccessPoint', testSchema);

module.exports = AccessPoint;
