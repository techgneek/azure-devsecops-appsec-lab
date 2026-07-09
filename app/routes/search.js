const express = require('express');

const router = express.Router();

const inventory = ['test', 'training', 'lab', 'security', 'application'];

router.get('/', (req, res) => {
  const searchTerm = String(req.query.q || '');

  // Training note: this simulates unsafe input handling by building a pseudo-query from raw user input.
  // Remediation example: validate, normalize, and parameterize input instead of concatenating raw values.
  const simulatedQuery = `SELECT * FROM inventory WHERE name LIKE '%${searchTerm}%'`;
  const results = inventory.filter((item) => item.includes(searchTerm.toLowerCase()));

  res.json({
    input: searchTerm,
    simulatedQuery,
    results,
    note: 'The query string is intentionally unsafe-looking for AppSec training, but no database is contacted.',
  });
});

module.exports = router;