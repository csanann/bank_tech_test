# Bank Account Transaction System

This is a very simple account transaction system written in Node.js. The system allows deposit and withdrawal operations and it also provided the ability to print the transaction statement.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

You will need Node.js and npm installed on your local environment. If you do not have these yet, please find the installation details here: https://nodejs.org/en/download 

### Installing

1. git clone https://github.com/csanann/bank_tech_test.git

2. Navigate to the project directory
cd bank_tech_test

3. install the dependencies 
npm install

## Running the Code

The 'src/bank_account.js' file contains the 'BankAccount' class, which you can use to perform various bank operations.

## running the Tests

Run the tests using the command:
npx jest or npm test

## Design Explanation

The codebase consists of a single class, 'BankAccount', responsible for maintaining the balance and transaction history. It handles deposits, withdrawals, balance checks and printing of statements.

While I could have created a separate 'Transaction' class, in this simple cases, a transaction is only defined by its amount, type(debit/credit), and the resulting balance. Therefore, it is modelled as an object instead of a class to keep the system simple.

The class diagram would look like this:

BankAccount
-----------
- balance: number
- transactions: array
-----------
+ deposit(amount: number): void
+ withdraw(amount: number): void
+ getBalance(): number
+ printStatement(): void

The 'BankAccount' class has two fields-balance(a number)and transactions(an array of objects). It has four methods for handling the deposits, withdrawals, balance checking, and printing the statement.

