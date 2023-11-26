const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Upload', {
});

module.exports = mongoose;
