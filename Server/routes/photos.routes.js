const photo_router = require("express").Router();
const { get_photo, delete_photo, get_all_photos, new_photo, update_photo } = require("../controllers/photos.controller");
const upload = require("../config/upload");
const verifyToken = require("../config/verifyToken");

photo_router.use(verifyToken)
photo_router.route("/").post(upload.single("photo"), new_photo).get(get_all_photos);
photo_router.route("/photos/:photo_id")
    .get(get_photo)
    .put(upload.single("photo"), update_photo)
    .delete(delete_photo);

module.exports = photo_router;
