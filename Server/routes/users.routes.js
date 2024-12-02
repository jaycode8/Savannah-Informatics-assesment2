const user_routes = require("express").Router();
const verifyToken = require("../config/verifyToken");
const { get_all_users, get_user } = require("../controllers/users.controller");

user_routes.use(verifyToken);
user_routes.route("/")
    .get(get_all_users);
user_routes.route("/:user_id")
    .get(get_user)

module.exports = user_routes;
