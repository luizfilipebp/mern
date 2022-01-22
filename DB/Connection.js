const mongoose = require('mongoose');

const URI = "mongodb+srv://mongodb3000:mongo3000@cluster0.bzsxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log('db connected...');
};

module.exports = connectDB;
