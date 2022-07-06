const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://openapi.naver.com',
      changeOrigin: true,
      pathRewrite: { '^/api/': '/' },
    }),
  );
};
