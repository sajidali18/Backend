const mongoose = require('mongoose');
const validator = require('validator')

const userschema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error("email is invalid, plz provide an valid email")
        //     }
        // }
    },
    password: {
        type: String,
        required: true,
    },
    create_passward: {
        type: String,
    },
    confirm_passward: {
        type: String,
    },
    phone_number: {
        type: Number,
        unique: true,
    },
    role: {
        type: String,
        enum: ['superadmin', 'admin', 'manager', 'normaluser'],
        default:'normaluser'
    }
})
const User = mongoose.model("users", userschema);
module.exports = User;