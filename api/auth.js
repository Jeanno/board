const { User, AccessToken } = require('./models');

module.exports = (req, res, next) => {
  req.user = null;
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    next();
    return;
  }
  const tokens = authHeader.split(' ');
  if (tokens.length !== 2) {
    next();
    return;
  }
  const token = tokens[1];
  AccessToken.findOne({
    where: {
      secret: token
    },
    include: 'user'
  }).then(accessToken => {
    if (accessToken) {
      req.user = accessToken.user;
    }
    next();
  });
}
