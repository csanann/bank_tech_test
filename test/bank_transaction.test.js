//file: test/bank_transaction.test.js

const BankTransaction = require('../src/bank_transaction');

const CURRENT_DATE = new Date('2023-01-14');

describe('BankTransaction', () => {
    beforeEach(() => {
        global.Date = class extends Date {
            constructor() {
                super();
                return CURRENT_DATE; 
            }
        };
    });

    test('should deposit money into bank account', () => {
        const bank_transaction = new BankTransaction();
        bank_transaction.deposit(1000);
        expect(bank_transaction.getBalance()).toBe(1000);
    });
    //user can not deposit a negative number or zero
    test('should not allow depositing negative amount', () => {
        const bank_transaction = new BankTransaction();
        expect(() => {
            bank_transaction.deposit(-100);
        }).toThrow('Deposit amount must be positive number');
    });

    test('should not allow depositing zero', () => {
        const bank_transaction = new BankTransaction();
        expect(() => {
            bank_transaction.deposit(0);
        }).toThrow('Deposit amount must be positive number');
    });

    test('should withdraw money from bank account', () => {
        const bank_transaction = new BankTransaction();
        bank_transaction.deposit(1000);
        bank_transaction.withdraw(500);
        expect(bank_transaction.getBalance()).toBe(500);
    });
    //withdrawing a negative number or zero is not allowed, shows message to the user
    test('should not allow withdrawing negative amount', () => {
        const bank_transaction = new BankTransaction();
        expect(() => {
            bank_transaction.withdraw(-100);
        }).toThrow('Withdraw amount must be positive');
    });
    
    test('should not allow withdrawing more than the balance', () => {
        const bank_transaction = new BankTransaction();
        bank_transaction.deposit(1000);
        expect(() => {
            bank_transaction.withdraw(1500);
        }).toThrow('Insufficient balance');
    });
    
    test('should not allow withdrawing zero', () => {
        const bank_transaction = new BankTransaction();
        expect(() => {
            bank_transaction.withdraw(0);
        }).toThrow('Withdraw amount must be positive');
    });

    // can not withdrawing an amount that exactly equals the current balance
    test('should allow withdrawing the exact balance amount', () => {
        const bank_transaction = new BankTransaction();
        bank_transaction.deposit(1000);
        expect(() => {
            bank_transaction.withdraw(1000);
        }).not.toThrow();
        expect(bank_transaction.getBalance()).toBe(0);
    });

    //can not depositing or withdrawing non-numeric values
    test('should not allow depositing non-numeric values', () => {
        const bank_transaction = new BankTransaction();
        expect(() => {
            bank_transaction.deposit('abc');
        }).toThrow('Deposit amount must be positive number');
    });

    test('should not allow withdrawing non-numeric values', () => {
        const bank_transaction = new BankTransaction();
        expect(() => {
            bank_transaction.withdraw('abc');
        }).toThrow('Withdraw amount must be positive number');
    });
});
