const { photosModel } = require("../models/base.models");

const new_photo = async (req, res) => {
    try {
        const { files, body } = req;
        const { title } = body;
        if (files && files.length > 0) {
            for (const file of files) {
                const photoData = {
                    title,
                    image_url: file.path,
                    image_public_id: file.filename,
                    album: req.params.album_id
                };

                const photo = new photosModel(photoData);
                await photo.save();
            }

            res.status(200).json({
                message: `${files.length} photos were successfully added`,
                success: true
            });
        } else {
            res.status(400).json({ message: "Image files are required", success: false });
        }
    } catch (err) {
        res.status(500).json({ message: err.message, success: false });
    }
};


const get_all_photos = async (req, res) => {
    try {
        const photos = await photosModel.find({album:req.params.album_id}).select("-image_public_id");
        res.status(200).json({ data: photos, success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

module.exports = { new_photo, get_all_photos};
