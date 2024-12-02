const photo_router = require("express").Router();
const { get_all_photos, new_photo } = require("../controllers/photos.controller");
const upload = require("../config/upload");
const verifyToken = require("../config/verifyToken");

photo_router.use(verifyToken)
photo_router.route("/:album_id").post(upload.array("photos", 50), new_photo).get(get_all_photos);

module.exports = photo_router;
