// General code across all schemas
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Specific code for this schema
const accesspointSchema = new Schema({
    timestamp: {
        type: String,
        required: true
    },
    building: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    connections: {
        type: Number,
        required: true
    }
}, {
    timestamp: true,
})

const AccessPoints = mongoose.model('AccessPoints', accesspointSchema);

module.exports = AccessPoints;
