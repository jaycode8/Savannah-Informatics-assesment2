const albums_router = require("express").Router();
const verifyToken = require("../config/verifyToken");
const { new_album, get_all_albums, update_album, delete_album } = require("../controllers/albums.controller");

albums_router.use(verifyToken);
albums_router.route("/")
    .post(new_album)
    .get(get_all_albums);
albums_router.route("/:album_id")
    .put(update_album)
    .delete(delete_album);
    

module.exports = albums_router;