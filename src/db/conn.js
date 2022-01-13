const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0.reqpx.mongodb.net/piyushdynamic?retryWrites=true&w=majority")
.then(() => { console.log("Connection successful") })
.catch((err) => { console.log(err) });


