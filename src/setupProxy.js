const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/zcsa-api', {
    target: 'http://41.175.8.230:8180',
    changeOrigin: true
  }))
};
