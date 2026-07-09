const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.type('html').send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Azure DevSecOps AppSec Lab</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 2rem; line-height: 1.5; }
          code { background: #f3f3f3; padding: 0.1rem 0.3rem; border-radius: 4px; }
        </style>
      </head>
      <body>
        <h1>Azure DevSecOps AppSec Vulnerability Management Lab</h1>
        <p>This app is intentionally vulnerable for interview prep and AppSec practice only.</p>
        <p>It demonstrates broken access control, unsafe input handling, debug exposure, excessive data exposure, missing security headers, and secrets scanning signals.</p>
        <ul>
          <li><code>/health</code></li>
          <li><code>/profile?id=1</code></li>
          <li><code>/search?q=test</code></li>
          <li><code>/debug</code></li>
          <li><code>/api/orders/:id</code></li>
          <li><code>/headers</code></li>
        </ul>
      </body>
    </html>
  `);
});

module.exports = router;