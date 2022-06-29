const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/interviewbot").then(() => {
    console.log(`Database Connected successfully`);
}).catch((e) => {
    console.log(`No connection`);
})