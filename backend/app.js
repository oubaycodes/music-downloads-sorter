const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: `${__dirname}/config.env` });
const port = 4000; //+process.env.PORT;
// middleware
app.use(express.json());
// routes import
const playlistRoute = require(`${__dirname}/Routes/playlistRoute.js`);
// use routes
// /api/v1/playlist?url="some url"
app.use("/api/v1/playlist", playlistRoute);
app.use("/", express.static(`${__dirname}/../frontend`));
// listening
app.listen(port, () => {
  console.log(`listening on port ${port}.....`);
});
module.exports = app;
