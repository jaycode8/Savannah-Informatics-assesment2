const { albumsModel, usersModel } = require("../models/base.models");

const new_album = async (req, res) => {
    try {
        req.body.user = req.id.user;
        const album = new albumsModel(req.body);
        const instance = await album.save();
        await usersModel.findByIdAndUpdate(req.id.user, { albums: instance.id });
        res.status(200).json({ message: `New album was successfully added`, success: true });
    } catch (err) {
        res.status(404).json({ message: err.message, success: false });
    }
};

const get_all_albums = async (req, res) => {
    try {
        const albums = await albumsModel.find().populate({path:"user",select:"username email"});
        res.status(200).json({ data: albums, success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

const get_album = async (req, res) => {
    try {
        const album = await albumsModel.findById(req.params.album_id).populate("user");
        res.status(200).json({ data: album, success: true });
    } catch (err) {
        res.status(403).json({ message: err.message, success: false });
    }
};

module.exports = { new_album, get_all_albums, get_album};
