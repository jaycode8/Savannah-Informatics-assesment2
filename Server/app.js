const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const routes = require("./routes/photos.routes");
const auth_routes = require("./routes/auth.routes");
const albums_routes = require("./routes/albums.routes");
require("./config/db");
const passport = require("passport");
const session = require("express-session");
const user_routes = require("./routes/users.routes");
const photo_router = require("./routes/photos.routes");
require("./config/googleStrategy");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        secret: process.env.secret,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60 * 60 * 1000,
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", auth_routes);
app.use("/albums", albums_routes);
app.use("/users", user_routes);
app.use("/photos", photo_router);

app.listen(PORT, () => console.info(`server running on port ${PORT}`));

