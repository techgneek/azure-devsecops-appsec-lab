const express = require('express');
const helmet = require('helmet');

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

  app.use(
    helmet({
      // Keep a practical baseline that is easy to explain in the lab.
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          objectSrc: ["'none'"],
          baseUri: ["'self'"],
          frameAncestors: ["'none'"],
        },
      },
      referrerPolicy: { policy: 'no-referrer' },
    })
  );

  // Helmet does not set Permissions-Policy by default in this configuration.
  app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
    next();
  });

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