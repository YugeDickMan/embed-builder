/* Modules */
const server = require("express")();

/* Server Settings */
server.set("view engine", "ejs");
server.set("views", __dirname + "/Views");

/* Routes */
server.get("/", (req, res) => {
  /* Embed Title */
  const embedTitle = req.query.title ? req.query.title : "";
  /* Embed Image */
  const embedImage = req.query.image ? req.query.image : "";
  /* Embed Big Image Option */
  const bigImg = req.query.bigImg ? req.query.bigImg : "";
  /* Embed Description */
  const embedDesc = req.query.desc ? req.query.desc : "";
  /* Embed Color */
  const embedCol = req.query.col ? req.query.col : "";

  /* Rendering */
  const options = {
    embedTitle,
    embedImage,
    embedDesc,
    embedCol,
    bigImg,
  };
  return res.render("index", { options: options });
});

server.listen(80, () => {
  console.log("Server Started!");
});
