const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.players=require("./player.model.js")(mongoose);
db.goalkeepers=require("./goalkeeper.model.js")(mongoose);

module.exports = db;

