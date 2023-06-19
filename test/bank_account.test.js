//file: test/bank_account.test.js

const BankAccount = require('../src/bank_account');

describe('BankAccount', () => {
  test('should deposit money into bank account', () => {
    const bank_account = new BankAccount();
    bank_account.deposit(1000);
    expect(bank_account.getBalance()).toBe(1000);
  });
});
