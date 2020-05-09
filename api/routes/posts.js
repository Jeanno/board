const { Post, Tag } = require('../models/');

const router = require('express').Router();

router.get("/", (req, res, next) => {
  Post.findAll().then(posts => {
    res.json(posts);
  });
});

router.post("/", (req, res, next) => {
  console.log("Create Post");
  console.log(req.body);
  console.log();
  
  if (!req.body.content) {
    res.json({
      status: "error",
      msg: "Post content cannot be empty."
    });
    res.sendStatus(400);
    return;
  }

  Post.create({
    content: req.body.content
  })
  .then(post => {
    res.sendStatus(200);
  });
});

module.exports = router;
