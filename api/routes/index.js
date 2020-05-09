module.exports = function(app) {
  app.use('/posts', require('./posts.js'));
};
