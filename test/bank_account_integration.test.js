// //file: test/bank_account_integration.test.js

const BankTransaction = require('../src/bank_transaction');
const BankStatement = require('../src/bank_statement');

const CURRENT_DATE = new Date('2023-01-14');

describe('BankTransaction integration tests', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    
    beforeEach(() => {
        global.Date = class extends Date {
            constructor() {
                super();
                return CURRENT_DATE; 
            }
        };
    });

    afterEach(() => {
        consoleSpy.mockClear();
    });

    it('should correctly process a series of transactions and print a statement', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const bankTransaction = new BankTransaction();
        
        bankTransaction.deposit(1000);
        bankTransaction.deposit(2000);
        bankTransaction.withdraw(500);
        const bankStatement = new BankStatement(bankTransaction.transactions);
        bankStatement.printStatement(bankTransaction.transactions);

        expect(consoleSpy).toHaveBeenCalledWith('date  ||  credit  ||  debit  ||  balance');
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('500.00  ||  2500.00'));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('  ||  2000.00  ||  '));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('  ||  1000.00  ||  '));
    });
});

