const users = require('../../models/UserSchema')

const getuser = async (req, res) => {
    try {
        const info = await users.find();
        // console.log("Users fetched successfully");
        res.status(200).json({ message: "Data fetched successfully", info: info });
    }
    catch (error) {
        console.error("error : ", error);
        res.status(500).json({ message: "internal server error", error: error.message });
    }
}

module.exports = getuser;