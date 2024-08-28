const User = require('../../models/UserSchema');

const RoleAssign = async (req, res) => {
    try {
        const { user_name, role } = req.body;
        const assign = await User.findOne({ user_name });
        if (assign) {
            assign.role = role;
            await assign.save();
        }
        res.status(200).json({ message: 'Role Assigned', assign: assign });
    }
    catch (error) {
        res.status(500).json({ message: "internal server" });
    }
}

module.exports = RoleAssign;