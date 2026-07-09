const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'azure-devsecops-appsec-lab',
    safeNote: 'This is a harmless health check endpoint.',
  });
});

module.exports = router;