const { createProxyMiddleware } = require('http-proxy-middleware');
// eslint-disable-next-line no-undef
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};
