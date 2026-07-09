const express = require('express');

const router = express.Router();

const recommendedHeaders = [
  'content-security-policy',
  'x-frame-options',
  'x-content-type-options',
  'referrer-policy',
  'permissions-policy',
];

router.get('/', (req, res) => {
  const currentHeaders = req.headers;
  const missingHeaders = recommendedHeaders.filter((header) => !Object.prototype.hasOwnProperty.call(req.headers, header));

  // Training note: this route shows the lack of common hardening headers.
  // Remediation example: add a hardened middleware layer such as helmet and tune the header policy.
  res.json({
    currentHeaders,
    missingSecurityHeaders: missingHeaders,
    note: 'This route intentionally demonstrates missing security headers.',
  });
});

module.exports = router;