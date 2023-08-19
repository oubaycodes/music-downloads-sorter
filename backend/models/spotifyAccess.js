const SpotifyWebApi = require("spotify-web-api-node");
class SpotifyAccess {
  constructor() {
    this.spotifyApi = new SpotifyWebApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: process.env.REDIRECT_URI,
    });
  }

  async initialize() {
    const token = await this.getToken();
    this.spotifyApi.setAccessToken(token);
  }

  async refreshToken() {
    const token = await this.getRefreshToken();
    this.spotifyApi.setAccessToken(token);
  }

  async getToken() {
    const result = await this.spotifyApi.clientCredentialsGrant();
    return result.body.access_token;
  }

  async getRefreshToken() {
    const result = await this.spotifyApi.refreshAccessToken();
    return result.body.access_token;
  }
}
module.exports = new SpotifyAccess();
