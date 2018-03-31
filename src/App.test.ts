const App = require('./App.ts');

test('Routes should be defined', () => {
  expect(App.mountRoutes).toBeDefined;
});