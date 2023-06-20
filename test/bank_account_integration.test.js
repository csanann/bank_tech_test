//file: test/bank_account_integration.test.js

const BankAccount = require('../src/bank_account');

describe('BankAccount integration tests', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    let bankAccount;

    beforeEach(() => {
        bankAccount = new BankAccount();
    });

    afterEach(() => {
        consoleSpy.mockClear();
    });

    it('should correctly process a series of transactions and print a statement', () => {
        bankAccount.deposit(1000);
        bankAccount.deposit(2000);
        bankAccount.withdraw(500);
        bankAccount.printStatement();

        expect(consoleSpy).toHaveBeenCalledWith('date  ||  credit  ||  debit  ||  balance');
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('500.00  ||  2500.00'));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('  ||  2000.00  ||  '));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('  ||  1000.00  ||  '));
    });
});
