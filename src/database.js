 const mongoose = require('mongoose');

 mongoose.connect("mongodb://mongoDb/mydatabase")
 .then(db => console.log("Connected to database"))
 .catch(err => console.error(err));