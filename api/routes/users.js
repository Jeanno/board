const { User } = require('../models');

const router = require('express').Router();

router.get("/", (req, res, next) => {
  Post.findAll().then(posts => {
    res.json(posts);
  });
});

router.post("/", (req, res, next) => {
  console.log("Create User");
  console.log(req.body);
  console.log();
  
  if (!req.body.nickname) {
    res.json({
      status: "error",
      msg: "User content cannot be empty."
    });
    res.sendStatus(400);
    return;
  }

  User.create({
    nickname: req.body.nickname,
    uid: ""
  })
  .then(post => {
    res.sendStatus(200);
  });
});

module.exports = router;
