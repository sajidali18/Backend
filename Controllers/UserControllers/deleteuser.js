const user = require('../../models/UserSchema');

const deleteUser = async (req, res) =>{
    try {
        // const { userid } = req.params;
        const dltuser = await user.findOneAndDelete({ _id: req.params.id });
        console.log(dltuser);
        // if (!dltuser) {
            
        //     return res.status(404).json({ error: 'User not found.' });
        // }
        res.status(200).json({ message: "User Deleted", DeletedUser: dltuser });
    }
    catch (error) {
        res.status(500).json({ message: "internal server" });
    }
}
module.exports = deleteUser;