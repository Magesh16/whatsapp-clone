const mongoose = require("mongoose");

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    
});

module.exports = mongoose.model('messageContent', whatsappSchema);