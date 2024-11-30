const { usersModel} = require("../models/base.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltsrounds = process.env.saltrounds;
const passport = require("passport");
const jwtKey = process.env.secret;

const main = async (req, res) => {
    res.send("<a href='/auth/google'>auth with google</a>");
};

const signUp = async (req, res) => {
    console.log(req.body);
    try {
        const existEmail = await usersModel.findOne({ email: req.body.email });
        if (!existEmail) {
            const existUsername = await usersModel.findOne({ username: req.body.username });
            if (!existUsername) {
                req.body.password = await bcrypt.hash(req.body.password, +saltsrounds);
                const user = new usersModel(req.body);
                await user.save();
                res.status(200).json({ message: "successfully added a new user", success: true });
            } else {
                res.status(400).json({ message: "User name is already taken", success: false });
            }
        } else {
            res.status(400).json({ message: "Email address is already registered", success: false });
        }
    } catch (err) {
        res.status(404).json({ message: err.message, success: false });
    }
};

const signIn = async (req, res) => {
    try {
        const foundUser = await usersModel.findOne({ username: req.body.username });
        if (foundUser) {
            const pinMatch = await bcrypt.compare(req.body.password, foundUser.password);
            if (pinMatch) {
                let tokens = await jwt.sign({ user: foundUser._id }, jwtKey, { expiresIn: 60 * 60 * 12 });
                res.status(200).json({ message: "Successfully logged in. Redirecting......", data: { user: foundUser ,access_token:tokens}, success: true });
            } else {
                res.status(400).json({ message: "password is incorrect", success: false });
            }
        } else {
            res.status(400).json({ message: `${req.body.username} doesnot exist`, success: false });
        }
    } catch (err) {
        res.status(404).json({ message: err.message, success: false });
    }
};

const googleAuth = passport.authenticate("google", { scope: ["email", "profile"] });

const googleCallback = passport.authenticate("google", {
    successRedirect: "/auth/success",
    failureRedirect: "/auth/failure",
});

const authSuccess = async (req, res) => {
    const existUser = await usersModel.findOne({ email: req.user.email });
    const existgoogleID = await usersModel.findOne({ googleID: req.user.id });
    if (existUser && existgoogleID) {
        const user = await usersModel.findOne({ email: req.user.email });
        let tokens = await jwt.sign({ user: user.id }, jwtKey, { expiresIn: 60 * 60 * 12 });
        res.status(200).json({ message: "Successfully authenticated using a google account", success: true, data: { user_id: user.id, token: tokens } });
    } else {
        if (existUser) {
            res.status(403).json({ message: "Email was regestered with password", success: false });
        } else {
            await user.save();
            res.redirect("/auth/success");
        }
    }
};

const authFailure = async (req, res) => {
    res.status(403).json({ message: "An internal server error has occured", success: false });
};

const logout = async (req, res) => {
    req.session.destroy();
    res.redirect("/");
};

module.exports = { main, signUp, signIn, googleAuth, googleCallback, authSuccess, authFailure, logout};
