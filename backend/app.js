const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
dotenv.config({ path: `${__dirname}/config.env` });
const port = +process.env.PORT;
// middleware
app.use(express.json());
app.use(bodyParser.json());
// routes import
const playlistRoute = require(`${__dirname}/Routes/playlistRoute.js`);
const sortRoute = require(`${__dirname}/Routes/sortRoute.js`);
// use routes
// /api/v1/playlist?url="some url"
app.use("/api/v1/playlist", playlistRoute);
app.use("/api/v1/sort", sortRoute);
app.use("/", express.static(`${__dirname}/../frontend`));
// listening
app.listen(port, () => {
  console.log(`listening on port ${port}.....`);
});
module.exports = app;
