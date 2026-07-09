const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // Training note: debug endpoints should not expose secrets or internals in production.
  // Remediation example: remove the route or gate it behind strict authentication and non-production checks.
  res.json({
    debug: true,
    environment: process.env.NODE_ENV || 'development',
    fakeSecret: 'REDACTED_FOR_TRAINING',
    message: 'This debug route is intentionally exposed for training and secrets-scanning demos.',
  });
});

module.exports = router;