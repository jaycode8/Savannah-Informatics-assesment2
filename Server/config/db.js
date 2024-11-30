const mongoose = require("mongoose");
const dbURL = process.env.dbURL

const dbconnect = mongoose.connect(dbURL);

if (dbconnect) {
    console.info("successfully connected to the database");
} else {
    console.error("unsuccessfull attempt to connect to the database");
}