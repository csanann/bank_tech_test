//file: test/bank_account.test.js

const BankAccount = require('../src/bank_account');

//I use 'new Date()' and here will mock this date in the tests 
//to ensure the output of 'printStatement' method is predictable and can be tested properly.
//by using Jest's 'mockImplementation' to mock the current date
const CURRENT_DATE = new Date('2023-01-14');

describe('BankAccount', () => {
    beforeEach(() => {
        //mock the current date
        global.Date = class extends Date {
            constructor() {
                super();
                return CURRENT_DATE; 
            }
        };
    });

    test('should deposit money into bank account', () => {
        const bank_account = new BankAccount();
        bank_account.deposit(1000);
        expect(bank_account.getBalance()).toBe(1000);
    });
    //user can not deposit a negative number or zero
    test('should not allow depositing negative amount', () => {
        const bank_account = new BankAccount();
        expect(() => {
            bank_account.deposit(-100);
        }).toThrow('Deposit amount must be positive number');
    });

    test('should not allow depositing zero', () => {
        const bank_account = new BankAccount();
        expect(() => {
            bank_account.deposit(0);
        }).toThrow('Deposit amount must be positive number');
    });

    test('should withdraw money from bank account', () => {
        const bank_account = new BankAccount();
        bank_account.deposit(1000);
        bank_account.withdraw(500);
        expect(bank_account.getBalance()).toBe(500);
    });
    //withdrawing a negative number or zero is not allowed, shows message to the user
    test('should not allow withdrawing negative amount', () => {
        const bank_account = new BankAccount();
        expect(() => {
            bank_account.withdraw(-100);
        }).toThrow('Withdraw amount must be positive');
    });

    test('should not allow withdrawing zero', () => {
        const bank_account = new BankAccount();
        expect(() => {
            bank_account.withdraw(0);
        }).toThrow('Withdraw amount must be positive');
    });

    // can not withdrawing an amount that exactly equals the current balance
    test('should allow withdrawing the exact balance amount', () => {
        const bank_account = new BankAccount();
        bank_account.deposit(1000);
        expect(() => {
            bank_account.withdraw(1000);
        }).not.toThrow();
        expect(bank_account.getBalance()).toBe(0);
    });

    //can not depositing or withdrawing non-numeric values
    test('should not allow depositing non-numeric values', () => {
        const bank_account = new BankAccount();
        expect(() => {
            bank_account.deposit('abc');
        }).toThrow('Deposit amount must be positive number');
    });

    test('should not allow withdrawing non-numeric values', () => {
        const bank_account = new BankAccount();
        expect(() => {
            bank_account.withdraw('abc');
        }).toThrow('Withdraw amount must be positive number');
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
        expect(consoleSpy).toHaveBeenCalledWith('date  ||  credit  ||  debit  ||  balance');
        expect(consoleSpy).toHaveBeenCalledWith('14/01/2023  ||    ||  500.00  ||  2500.00');
        expect(consoleSpy).toHaveBeenCalledWith('14/01/2023  ||  2000.00  ||    ||  3000.00');
        expect(consoleSpy).toHaveBeenCalledWith('14/01/2023  ||  1000.00  ||    ||  1000.00');
    });
});
