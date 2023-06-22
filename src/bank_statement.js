// file: src/bank_statement.js

const BankTransaction = require('./bank_transaction');

class BankStatement {
    constructor(transactions) {
        this.transactions = transactions;
    }

    printStatement() {
        console.log('date  ||  credit  ||  debit  ||  balance');
        
        for (let transaction of [...this.transactions].reverse()) {

            let credit = transaction.type === 'credit' ? transaction.amount.toFixed(2) : '';
            let debit = transaction.type == 'debit' ? transaction.amount.toFixed(2) : '';
            let date = transaction.date.toLocaleDateString('en-GB');
            console.log(`${date}  ||  ${credit}  ||  ${debit}  ||  ${transaction.balance.toFixed(2)}`);
        }
    }
}

module.exports = BankStatement;
