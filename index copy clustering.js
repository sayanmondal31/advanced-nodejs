process.env.UV_THREADPOOL_SIZE = 1;
const express = require("express");
const cluster = require("cluster");
const crypto = require("crypto");

// is the file being executed in master mode?
if (cluster.isMaster) {
  // cause index.js to be executed *again* but in child mode

  cluster.fork(); // fork a new process
  cluster.fork(); // fork a new process
} else {
  // I am a child, I am going to act like a server and do nothing else
  const app = express();

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hi there");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("This was fast!");
  });

  app.listen(3030, () => {
    console.log("Listening on port 3030");
  });
}
