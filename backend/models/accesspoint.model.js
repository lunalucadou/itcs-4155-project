// General code across all schemas
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Specific code for this schema
const accesspointSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    }
}, {
    timestamp: true,
})

const AccessPoint = mongoose.model('AccessPoint', accesspointSchema);

module.exports = AccessPoint;
