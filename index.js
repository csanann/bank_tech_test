// file: index.js

const readline = require('readline');
const BankTransaction = require('./src/bank_transaction');
const BankStatement = require('./src/bank_statement');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const bankTransaction = new BankTransaction();

const askQuestion = () => {
    rl.question('What would you like to do? (deposit, withdraw, print, exit): ', (answer) => {
        switch(answer.toLowerCase()) {
            case 'deposit':
                rl.question('How much would you like to deposit?: ', (amount) => {
                    bankTransaction.deposit(Number(amount));
                    askQuestion();
                });
                break;
            case 'withdraw':
                rl.question('How much would you like to withdraw?: ', (amount) => {
                    bankTransaction.withdraw(Number(amount));
                    askQuestion();
                });
                break;
            case 'print':
                const bankStatement = new BankStatement(bankTransaction.transactions);
                bankStatement.printStatement();
                askQuestion();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                console.log('Invalid command');
                askQuestion();
        }
    });
};

askQuestion();
