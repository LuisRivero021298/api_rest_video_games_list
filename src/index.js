"use strict";

const app = require("./app");

async function init() {
  //starting server
  const port = app.get("port");
  await app.listen(port);
  console.log("Server on port " + port);
}

init();

