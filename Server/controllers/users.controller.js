const { usersModel } = require("../models/base.models");

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
        const user = await usersModel.findById(req.params.user_id).populate("albums");
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

module.exports = { delete_user, get_all_users, get_user, update_user};
