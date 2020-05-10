const { User, AccessToken } = require('../models');

const router = require('express').Router();

router.get("/", (req, res, next) => {
  User.findAll().then(users => {
    res.json(users);
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
    uid: "",
    AccessTokens: [{
      secret: ""
    }]
  }, {
    include: [ AccessToken ]
  })
  .then(user => {
    let ret = user.toJSON();
    res.status(200);
    res.json(ret);
  });
});

module.exports = router;
