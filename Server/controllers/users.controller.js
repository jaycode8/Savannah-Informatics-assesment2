const { usersModel } = require("../models/base.models");

const new_user = async (req, res) => {
    try {
        const existEmail = await usersModel.findOne({ email: req.body.email });
        if (!existEmail) {
            const existUsername = await usersModel.findOne({ username: req.body.username });
            if (!existUsername) {
                const user = new usersModel(req.body);
                await user.save();
                res.status(200).json({ message: `New user successfully added`, success: true });
                
            } else {
                res.status(403).json({ message: "username is already taken", success: false });
            }
        } else {
            res.status(403).json({ message: "Email address is already used", success: false });
        }
    } catch (err) {
        res.status(404).json({ message: err.message, success: false });
    }
};

const get_all_users = async (req, res) => {
    try {
        const users = await usersModel.find();
        res.status(200).json({ data: users, success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

const get_user = async (req, res) => {
    try {
        const user = await usersModel.findById(req.params.user_id);
        res.status(200).json({ data: user, success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

const update_user = async (req, res) => {
    try {
        await usersModel.findByIdAndUpdate(req.params.user_id, req.body);
        res.status(200).json({ message: "Successfully updated user data", success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

const delete_user = async (req, res) => {
    try {
        await usersModel.findByIdAndDelete(req.params.user_id);
        res.status(200).json({ message: "Successfully deleted user data", success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

module.exports = { new_user, delete_user, get_all_users, get_user, update_user};
