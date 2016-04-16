var mongoose = require('mongoose');

// Create Schema
var DefdataSchema = new mongoose.Schema({
    
    userID: {
        type: String,
        required: true
    },

	createTime: {
        type: String,
        required: true
    },
	
	stlName: {
        type: String,
        required: true
    },

	defVals: {
        type: String,
        required: true
    },
	
	userComments: {
        type: String,
        required: true
    }
		
});

// Export the model Schema
module.exports = DefdataSchema;