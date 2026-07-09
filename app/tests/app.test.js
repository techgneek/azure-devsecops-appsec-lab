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

test('GET /debug returns the fake training secret', async () => {
  const app = createApp();
  const response = await request(app).get('/debug');

  assert.equal(response.statusCode, 200);
  assert.match(response.body.fakeSecret, /FAKE-LAB-SECRET/);
});

test('GET /api/orders/1001 returns over-shared order data', async () => {
  const app = createApp();
  const response = await request(app).get('/api/orders/1001');

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.order.id, '1001');
  assert.ok(response.body.order.internalNotes);
});

test('GET /headers exposes current request headers and missing header list', async () => {
  const app = createApp();
  const response = await request(app).get('/headers');

  assert.equal(response.statusCode, 200);
  assert.ok(Array.isArray(response.body.missingSecurityHeaders));
});