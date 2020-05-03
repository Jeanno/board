const { Post } = require('./models/Post.js');
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const { db } = require('./db.js');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());


app.get("/posts", (req, res, next) => {
  Post.findAll().then(posts => {
    res.json(posts);
  });
});

app.post("/posts", (req, res, next) => {
  console.log("Create Post");
  console.log(req.body);
  console.log();
  Post.create({
    content: req.body.content
  })
  .then(post => {
    res.sendStatus(200);
  });
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

