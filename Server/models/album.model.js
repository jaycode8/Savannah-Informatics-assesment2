const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const albumSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: () => uuidv4(),
        },
        title: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            ref: "users",
            required: true,
        },
    },
    { timestamps: true }
);

const photoSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: () => uuidv4(),
        },
        album: {
            type: String,
            ref: "albums",
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
            required: true,
        },
        image_public_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = { albumSchema, photoSchema };
