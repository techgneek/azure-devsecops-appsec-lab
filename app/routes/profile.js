const express = require('express');

const router = express.Router();

const profiles = {
  '1': { id: 1, displayName: 'Alex Engineer', role: 'Developer' },
  '2': { id: 2, displayName: 'Taylor Analyst', role: 'Security Analyst' },
  '3': { id: 3, displayName: 'Jordan Manager', role: 'Manager' },
};

router.get('/', (req, res) => {
  const { id } = req.query;
  const profile = profiles[id];

  // Training note: this route intentionally omits authorization checks to demonstrate IDOR / broken access control.
  // Remediation example: verify the caller's identity and enforce object-level authorization before returning profile data.
  if (!profile) {
    return res.status(404).json({ error: 'Profile not found' });
  }

  res.json({
    profile,
    note: 'This endpoint is intentionally vulnerable for training purposes only.',
  });
});

module.exports = router;