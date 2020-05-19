const router = require('express').Router();

router.get("/", (req, res, next) => {
  res.json({
    me: req.user
  });
});
module.exports = router;
