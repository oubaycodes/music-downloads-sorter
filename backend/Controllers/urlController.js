const app = require(`${__dirname}/../app`);
const shell = require("shelljs");
const validUrl = require("valid-url");
exports.downloadPlaylist = async (req, res) => {
  try {
    const url = req.query.url;
    // if (!validUrl.isWebUri(url)) throw new Error("Input is not a valid url");

    shell.exec(`${__dirname}/../Utils/script.bash ${url}`);
    res.status(200).json({
      status: "success",
      url,
    });
  } catch (err) {
    console.error(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
