const objectParser = function (playlistInfo) {
  const songArr = playlistInfo.map((item) => {
    return {
      songName: item.track.name,
      url: item.track.external_urls.spotify,
    };
  });
  return songArr;
};
module.exports = objectParser;
