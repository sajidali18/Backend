const user = require('./../../models/UserSchema');

const isValidPhoneNumber = (number) => {
    const numberRegEx = /^(?:\+?91|0)?[6789]\d{9}$/;
    return numberRegEx.test(number);
}

const updateuser = async (req, res) => {
    try {
        const { id, user_name, phone_number } = req.body;

        if (!isValidPhoneNumber(phone_number)) {
           
            return res.status(400).json({ message: "Invalid mobile number", success: false });
        }

       
        const userExists = await user.findById(id);
        if (!userExists) {
            return res.status(404).json({ message: "User not found", success: false });
        }

    
        const updateduser = await user.findByIdAndUpdate(id, { user_name, phone_number }, { new: true });

     
        res.status(200).json({ message: 'User updated successfully', updateduser });

    } catch (error) {
        console.error("Error in updating user:", error);
        res.status(500).json({ message: "Error in updating user", error });
    }
}

module.exports = updateuser;
