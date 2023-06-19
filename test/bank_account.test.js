//file: test/bank_account.test.js

const BankAccount = require('../src/bank_account');

test('should create a new bank account', () => {
  const bank_account = new BankAccount();
  expect(bank_account).toBeTruthy();
});