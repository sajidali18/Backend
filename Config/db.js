const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();
const database = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected Succesfully....${conn.connection.host}`);
    }
    catch(error) {
        console.log(`error in connection ${error}`);
    }
}

module.exports = database;