//file: app.js

const BankTransaction = require('./src/bank_transaction');
const BankStatement = require('./src/bank_statement');

const bankTransaction = new BankTransaction();
bankTransaction.deposit(1000);
bankTransaction.deposit(2000);
bankTransaction.withdraw(500);

const bankStatement = new BankStatement(bankTransaction.transactions);
bankStatement.printStatement();
