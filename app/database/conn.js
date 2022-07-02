const mongoose = require("mongoose");
const db = "mongodb+srv://Nitish:nitish123@interviewbot.0luon.mongodb.net/interviewbot?retryWrites=true&w=majority";
mongoose.connect(db).then(() => {
    console.log(`Database Connected successfully`);
}).catch((e) => {
    console.log(`No connection`);
})
