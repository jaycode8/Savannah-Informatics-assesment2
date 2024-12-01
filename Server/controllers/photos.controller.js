const { photosModel } = require("../models/base.models");

const new_photo = async (req, res) => {
    try {
        if (req.file) {
            req.body.image_url = req.file.path;
            req.body.image_public_id = req.file.filename;
            req.body.album = req.params.album_id;
            const photo = new photosModel(req.body);
            await photo.save();
            res.status(200).json({ message: `New photo was successfully added`, success: true });
        } else {
            res.status(404).json({ message: "Image fileis required", success: false });
        }
    } catch (err) {
        res.status(404).json({ message: err.message, success: false });
    }
};

const get_all_photos = async (req, res) => {
    try {
        const photos = await photosModel.find().select("-image_public_id");
        res.status(200).json({ data: photos, success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

const get_photo = async (req, res) => {
    try {
        const photo = await photosModel.findById(req.params.photo_id).select("-image_public_id").populate("album");
        res.status(200).json({ data: photo, success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

const update_photo = async (req, res) => {
    try {
        const photo = await photosModel.findById(req.params.photo_id);
        if (req.file) {
            req.body.image_url = req.file.path;
            req.body.image_public_id = req.file.filename;
            destroy_file(photo.image_public_id);
        }
        await photosModel.findByIdAndUpdate(req.params.photo_id, req.body);
        res.status(200).json({ message: "Successfully updated photo's data", success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

const delete_photo = async (req, res) => {
    try {
        const photo = await photosModel.findById(req.params.photo_id);
        destroy_file(photo.image_public_id);
        await photosModel.findByIdAndDelete(req.params.photo_id);
        res.status(200).json({ message: "Successfully deleted photo's data", success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

module.exports = { new_photo, delete_photo, get_all_photos, get_photo, update_photo};
