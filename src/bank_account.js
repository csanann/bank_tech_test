// file: src/bank_account.js

class BankAccount {
  constructor() {
    this.balance = 0;

  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.getBalance() < amount) {
      throw new Error('Insufficient balance');
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;