// file: src/bank_account.js

class BankAccount {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
        if(typeof amount !== 'number' || amount <= 0) {
            throw new Error('Deposit amount must be positive number');
        }
        this.balance += amount;
        this.transactions.push({ type: 'credit', amount, balance: this.balance, date: new Date() });
    }

    withdraw(amount) {
        if(typeof amount !== 'number' || amount <= 0) {
            throw new Error('Withdraw amount must be positive number');
        }
        if (this.getBalance() < amount) {
            throw new Error('Insufficient balance');
        }
        this.balance -= amount;
        this.transactions.push({ type: 'debit', amount, balance: this.balance, date: new Date() });
    }

    getBalance() {
        return this.balance;
    }

    printStatement() {
        //display the strings
        console.log('date  ||  credit  ||  debit  ||  balance');
        //to display the recent transaction:
        //use transactions.reverse method, make a new copy and reverse it, to return a new array(nothing change with the original array)
        for (let transaction of [...this.transactions].reverse()) {
            //if the transaction is not credit then it's debit
            //format to have 2 decimal and set it to an empty string
            //and print out each line of the statement with date(dd/mm/yyyy)
            let credit = transaction.type === 'credit' ? transaction.amount.toFixed(2) : '';
            let debit = transaction.type == 'debit' ? transaction.amount.toFixed(2) : '';
            console.log(`${transaction.date.toLocaleDateString()}  ||  ${credit}  ||  ${debit}  ||  ${transaction.balance.toFixed(2)}`);
        }
    }
}

module.exports = BankAccount;