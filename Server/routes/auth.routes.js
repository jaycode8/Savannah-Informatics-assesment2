const auth_router = require("express").Router();
const { main, signIn, signUp } = require("../controllers/auth.controller");

auth_router.post("/", signIn);
auth_router.post("/signup", signUp);

module.exports = auth_router;
