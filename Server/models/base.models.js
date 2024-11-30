const mongoose = require("mongoose");
const {userSchema} = require("./users.model");
const { albumSchema, photoSchema } = require("./album.model");

const usersModel = mongoose.model("users", userSchema);
const albumsModel = mongoose.model("albums", albumSchema);
const photosModel = mongoose.model("photos", photoSchema);

module.exports = { usersModel, albumsModel, photosModel};