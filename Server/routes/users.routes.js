const user_routes = require("express").Router();
const verifyToken = require("../config/verifyToken");
const { get_all_users, update_user,delete_user } = require("../controllers/users.controller");

user_routes.use(verifyToken);
user_routes.route("/")
    .get(get_all_users);
user_routes.route("/:user_id")
    .put(update_user)
    .delete(delete_user);

module.exports = user_routes;
