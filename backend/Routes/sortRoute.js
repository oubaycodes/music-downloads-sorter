const express = require("express");
const controller = require(`${__dirname}/../Controllers/sortController.js`);
const router = express.Router();
router.route("/zip").get(controller.zipTracks);

module.exports = router;
