const express = require("express");
const controller = require(`${__dirname}/../Controllers/urlController.js`);
const router = express.Router();
router.route("/").get(controller.downloadPlaylist);

module.exports = router;
