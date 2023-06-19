//file: test/bank_account.test.js

const BankAccount = require('../src/bank_account');

describe('BankAccount', () => {
  test('should deposit money into bank account', () => {
    const bank_account = new BankAccount();
    bank_account.deposit(1000);
    expect(bank_account.getBalance()).toBe(1000);
  });

  test('should withdraw money from bank account', () => {
    const bank_account = new BankAccount();
    bank_account.deposit(1000);
    bank_account.withdraw(500);
    expect(bank_account.getBalance()).toBe(500);
  });

  test('should print the bank account statement', () => {
    const bank_account = new BankAccount();
    bank_account.deposit(1000);
    bank_account.deposit(2000);
    bank_account.withdraw(500);
    //use spyOn for jest, to keep eyes on the calls to 'console.log'
    const consoleSpy = jest.spyOn(console, 'log');
    bank_account.printStatement();
    //check if it called with the expected arguments or not
    expect(consoleSpy).toHaveBeenCalledWith("date  ||  credit  ||  debit  ||  balance");
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("500.00  ||  2500.00"));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("  ||  2000.00  ||  "));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("  ||  1000.00  ||  "));
  });
});
