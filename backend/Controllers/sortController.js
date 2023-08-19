const app = require(`${__dirname}/../app`);
const shell = require("shelljs");
const fs = require("fs/promises");

exports.zipTracks = async (req, res) => {
  try {
    const writeDir = process.env.WRITE_DIR;
    // i still don't know what approach i should try here
    const dirFiles = await fs.readdir(writeDir, { encoding: "buffer" });
    res.status(200).json({
      status: "ok",
      dirFiles,
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};
