const app = require(`${__dirname}/../app`);
const shell = require("shelljs");
const spotifyAccess = require(`${__dirname}/../models/spotifyAccess`);
const spotifyUri = require("spotify-uri");
const createSongObject = require(`${__dirname}/../modules/createSongObj`);

exports.getSongList = async (req = "", res = "") => {
  try {
    const playlistUrl = req.body.url;
    // spotify access
    await spotifyAccess.initialize();
    const spotifyApi = spotifyAccess.spotifyApi;
    const playlistId = spotifyUri.parse(playlistUrl).id;
    // fetch and parse
    let playlistInfo = await spotifyApi.getPlaylistTracks(playlistId);
    playlistInfo = playlistInfo.body.items;
    playlistInfo = createSongObject(playlistInfo);

    if (!res) return playlistInfo;
    res.status(200).json({
      status: "ok",
      data: {
        playlistInfo,
      },
    });
  } catch (err) {
    console.error(err);
    if (!res) return;
    res.status(401).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.downloadPlaylist = async (req, res) => {
  try {
    const playlistUrl = req.body.url;
    const playlistTracks = await this.getSongList(req);
    playlistTracks.forEach((track) =>
      shell.exec(`${__dirname}/../scripts/download.bash ${track.url}`)
    );
    res.status(200).json({
      status: "success",
      playlistUrl,
    });
  } catch (err) {
    console.error(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.downloadPlaylist = async (req, res) => {
  try {
    const songUrl = req.body.url;

    shell.exec(`${__dirname}/../scripts/download.bash ${songUrl}`);

    res.status(200).json({
      status: "success",
      songUrl,
    });
  } catch (err) {
    console.error(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
