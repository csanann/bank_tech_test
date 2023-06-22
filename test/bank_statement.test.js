
// //file: test/bank_statement.test.js

const BankTransaction = require('../src/bank_transaction');
const BankStatement = require('../src/bank_statement');

const CURRENT_DATE = new Date('2023-01-14');

describe('BankStatement', () => {
    beforeEach(() => {
        //mock the current date
        global.Date = class extends Date {
            constructor() {
                super();
                return CURRENT_DATE; 
            }
        };
    });

    test('should print the bank account statement', () => {
        const bank_transaction = new BankTransaction();
        bank_transaction.deposit(1000);
        bank_transaction.deposit(2000);
        bank_transaction.withdraw(500);
        
        const consoleSpy = jest.spyOn(console, 'log');
        const bank_statement = new BankStatement(bank_transaction.transactions);
        bank_statement.printStatement();

        expect(consoleSpy).toHaveBeenCalledWith('date  ||  credit  ||  debit  ||  balance');
        expect(consoleSpy).toHaveBeenCalledWith('14/01/2023  ||    ||  500.00  ||  2500.00');
        expect(consoleSpy).toHaveBeenCalledWith('14/01/2023  ||  2000.00  ||    ||  3000.00');
        expect(consoleSpy).toHaveBeenCalledWith('14/01/2023  ||  1000.00  ||    ||  1000.00');
    });
});
