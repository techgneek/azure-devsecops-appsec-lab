const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const { createApp } = require('../app');

test('GET /health returns a health payload', async () => {
  const app = createApp();
  const response = await request(app).get('/health');

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.status, 'ok');
});

test('GET /profile?id=1 returns profile data', async () => {
  const app = createApp();
  const response = await request(app).get('/profile?id=1');

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.profile.id, 1);
});

test('GET /search?q=test returns simulated query output', async () => {
  const app = createApp();
  const response = await request(app).get('/search?q=test');

  assert.equal(response.statusCode, 200);
  assert.match(response.body.simulatedQuery, /SELECT \* FROM inventory/);
});

test('GET /debug returns the training placeholder', async () => {
  const app = createApp();
  const response = await request(app).get('/debug');

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.fakeSecret, 'REDACTED_FOR_TRAINING');
});

test('GET /api/orders/1001 returns intentionally vulnerable order data', async () => {
  const app = createApp();
  const response = await request(app).get('/api/orders/1001');

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.order.id, '1001');
  assert.equal(response.body.order.customerName, 'Sample Customer');
  assert.equal(response.body.order.total, 149.99);
  assert.ok(Array.isArray(response.body.order.items));
  assert.equal(response.body.order.internalNotes, 'Sensitive internal note visible in the vulnerable response.');
  assert.equal(response.body.order.paymentTokenLast4, '4242');
});

test('GET /headers reports missing baseline security headers in vulnerable mode', async () => {
  const app = createApp();
  const response = await request(app).get('/headers');

  assert.equal(response.statusCode, 200);
  assert.ok(Array.isArray(response.body.missingSecurityHeaders));
  assert.ok(response.body.missingSecurityHeaders.length > 0);
  assert.equal(response.body.responseSecurityHeaders['x-frame-options'], null);
  assert.equal(response.body.responseSecurityHeaders['x-content-type-options'], null);
  assert.equal(response.body.responseSecurityHeaders['referrer-policy'], null);
  assert.equal(response.body.responseSecurityHeaders['content-security-policy'], null);
  assert.equal(response.body.responseSecurityHeaders['permissions-policy'], null);
});