const multer = require("multer");
const cloudinary = require("./cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

let storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${file.originalname.split(".")[0]}-assessment.${ext}`);
    },
});

let storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "assessment",
        allowed_formats: ["jpg", "png", "jpeg"],
    },
});

let upload = multer({ storage: storage2 });

module.exports = upload;
