const express = require('express');

const homeRoute = require('./routes/home');
const healthRoute = require('./routes/health');
const profileRoute = require('./routes/profile');
const searchRoute = require('./routes/search');
const debugRoute = require('./routes/debug');
const ordersRoute = require('./routes/orders');
const headersRoute = require('./routes/headers');

function createApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static('public'));

  app.use('/', homeRoute);
  app.use('/health', healthRoute);
  app.use('/profile', profileRoute);
  app.use('/search', searchRoute);
  app.use('/debug', debugRoute);
  app.use('/api/orders', ordersRoute);
  app.use('/headers', headersRoute);

  app.use((req, res) => {
    res.status(404).json({
      error: 'Not found',
      path: req.originalUrl,
      message: 'This lab only exposes the training routes documented in the README.',
    });
  });

  return app;
}

module.exports = {
  createApp,
};