module.exports = function(app) {
  app.use('/posts', require('./posts.js'));
  app.use('/users', require('./users.js'));
  app.use('/me', require('./me.js'));
};
