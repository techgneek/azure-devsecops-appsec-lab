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
  const responseHeaders = res.getHeaders();
  const missingHeaders = recommendedHeaders.filter(
    (header) => !Object.prototype.hasOwnProperty.call(responseHeaders, header)
  );

  // Post-remediation note: this route now reports response header hardening status.
  res.json({
    responseSecurityHeaders: {
      'content-security-policy': responseHeaders['content-security-policy'] || null,
      'x-frame-options': responseHeaders['x-frame-options'] || null,
      'x-content-type-options': responseHeaders['x-content-type-options'] || null,
      'referrer-policy': responseHeaders['referrer-policy'] || null,
      'permissions-policy': responseHeaders['permissions-policy'] || null,
    },
    missingSecurityHeaders: missingHeaders,
    note: missingHeaders.length === 0
      ? 'Security header baseline is present.'
      : 'Security header baseline is partially missing.',
  });
});

module.exports = router;