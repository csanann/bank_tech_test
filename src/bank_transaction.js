
// file: src/bank_account.js
// handles transactions 


class BankTransaction {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
        if (typeof amount != 'number' || amount <= 0) {
            throw new Error('Deposit amount must be positive number');
        }
        this.balance += amount;
        this.transactions.push({ type: 'credit', amount, balance: this.balance, date: new Date() });
    }

    withdraw(amount) {
        if (typeof amount != 'number' || amount <= 0) {
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

    // printStatement() {
    //     console.log('date  || credit  ||  debit  ||  balance');
    //     for (let transaction of [...this.transactions].reverse()) {
    //         let credit = transaction.type === 'credit' ? transaction.amount.toFixed(2) : '';
    //         let debit = transaction.type === 'debit' ? transaction.amount.toFixed(2) : '';
    //         let date = transaction.date.toLocaleDateString('en-GB');
    //         console.log(`${date}  ||  ${credit}  ||  ${debit}  ||  ${transaction.balance.toFixed(2)}`);
    //     }
    // }
}

module.exports = BankTransaction;
