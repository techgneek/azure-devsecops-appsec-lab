const express = require('express');

const router = express.Router();

const orders = {
  '1001': {
    id: '1001',
    customerName: 'Sample Customer',
    total: 149.99,
    items: ['lab hoodie', 'training notebook'],
    internalNotes: 'Sensitive internal note visible in the vulnerable response.',
    paymentTokenLast4: '4242',
  },
  '1002': {
    id: '1002',
    customerName: 'Example Buyer',
    total: 89.5,
    items: ['security sticker', 'coffee mug'],
    internalNotes: 'Another internal note for demonstration only.',
    paymentTokenLast4: '1111',
  },
};

router.get('/:id', (req, res) => {
  const order = orders[req.params.id];

  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }

  // Training note: this returns more data than a real API should, demonstrating excessive data exposure.
  // Remediation example: return only the fields the caller needs and authorize access to the object.
  res.json({
    order,
    note: 'This response intentionally over-shares for AppSec training.',
  });
});

module.exports = router;