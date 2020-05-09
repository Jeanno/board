module.exports = function(app) {
  app.use('/posts', require('./posts.js'));
  app.use('/users', require('./users.js'));
};
