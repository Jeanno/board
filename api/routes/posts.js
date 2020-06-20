const { Post, Tag } = require('../models/');

const router = require('express').Router();

router.get("/", (req, res, next) => {
  Post.findAll().then(posts => {
    res.json(posts);
  });
});

router.get("/:postId", (req, res, next) => {
  const postId = req.params['postId'];
  Post.findOne({
    where: {
      id: postId
    }
  }).then(post => {
    res.json(post);
  });
});

router.post("/", (req, res, next) => {
  console.log("Create Post");
  console.log(req.body);
  console.log();
  
  if (!req.body.content.trim()) {
    res.status(400);
    res.json({
      status: "error",
      msg: "Post content cannot be empty."
    });
    return;
  }

  let userId = null;
  if (req.user) {
    userId = req.user.id;
  }
  Post.create({
    content: req.body.content,
    authorId: userId
  })
  .then(post => {
    res.status(200);
    res.json(post);
  });
});

module.exports = router;
