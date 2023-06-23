# Bank Account Transaction System :tada:

This is a very simple account transaction system written in Node.js. 
The system allows users to make deposits and withdrawals and the ability to print the transaction statement.

## Overview

The Bank Account Transaction System aims to emulate simple banking operations. 
It is designed as a helpful tool for users who want to manage their personal finances or developers seeking to understand basic banking functionality.
```
The requirement for this project are:
1. Implement a REPL interaction
2. Allow bank account deposits
3. Allow bank account withdrawals
4. Provide a bank statement featuring date, amount, and balance
5. Statement must show deposit and withdrawal details
6. Statement needs to display data in a chronological order
7. Use in-memory data storage
8. Implement Test-Driven Development(TDD)
9. Ensure code follows Object-Oriented Design(OOD)
```
## How to approach or solve the problem:
```
1. Create test cases:
Write test cases for bank account operations that include deposit, 
withdrawal, and printing a bank statement. Use Jest's `expect` and `toThrow` 
for testing expected outcomes and exceptions, respectively.

2. Setup Mock Date: 
Use Jest's `mockImplementation` to mock the current date, 
ensuring the predictability of the tests' outcome.

3. Write code for BankTransaction class:
The BankTransaction class should contain methods to handle deposit 
and withdrawal transactions. Each transaction should update the balance 
and log the transaction (type, amount, balance, and date) in a transaction array.

4. Write code for BankStatement class: 
The BankStatement class should take the array of transactions 
and include a `printStatement` method that prints the transactions in a specific format. 
The transactions should be printed in reverse order to show the most recent transactions first.

5. Integrate BankTransaction and BankStatement classes: 
In an `app.js` file, demonstrate how these classes interact by creating 
a new BankTransaction, making a series of deposits and withdrawals, 
creating a new BankStatement with the transaction history, and printing the bank statement. 

6. Create Interactive Terminal Application: 
In an `index.js` file, use Node.js's `readline` module to create a command-line interface 
that lets users interactively deposit, withdraw, and print a bank statement. 
This simulates a real-world banking application.

7. Run the test(s): 
Use Jest to run the test(s). If all tests pass, the implementation is correct. 
If not, debug and adjust the code based on the failed test cases.

8. Manually test the application: 
In addition to running automated tests, interact with the code via a Node.js terminal 
or other REPL. Test the deposit, withdrawal, and printStatement methods to verify their functionality.

By following these steps, 
we ensure a Test-Driven Development (TDD) approach that makes the code more robust, 
as well as an interactive application that can be used directly from the command line.

```
## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Ensure you have met the following requirements:
* You have Node.js and npm installed on your local environment. If you do not have these yet, please find the installation details here:
```
:link: https://nodejs.org/en/download 
```

### Installing

1. Clone the project repository:
```
git clone https://github.com/csanann/bank_tech_test.git
```
2. Navigate to the project directory: 
```
cd bank_tech_test
```
3. install the dependencies, setup Node.js and jest, ESLint, Coverage: 
```
mpm init -y
npm install --save-dev jest
npm install -g eslint
npm install eslint --save-dev
npx eslint --init

```
Before you install anything, please, double check whether you are at the right directory or not and is it the right version or not.
Also, do not forget to edit or configure the package.json to meet the required testing frameworks before run the test(s).

## Usage

The 'src/bank_account.js' file contains the 'BankAccount' class, which you can use to perform various bank operations.

## Running the Tests

Ensure that your application is functioning as expected by running tests: 
```
npx jest or npm test
```

## Design

The codebase consists of a single class, 'BankAccount', responsible for maintaining the balance and transaction history. 
It handles deposits, withdrawals, balance checks and printing of statements.

The class diagram would look like this:
```
BankAccount
- - - - - - -
- balance: number
- transactions: array
- deposit(amount: number): void
- withdraw(amount: number): void
- getBalance(): number
- printStatement(): void
```

The 'BankAccount' class has two fields-balance(a number)and transactions(an array of objects). 
It has four methods for handling the deposits, withdrawals, balance checking, and printing the statement.

## Screenshots 

For a visual overview of the system in action, refer to the following screenshots:+1: :pound: :moneybag:

After review: app.js is a simple file(hardcode) to run the application with Node


'''
![System in use](./images/bank_tech_app.png)
 '''


 This is index.js which has the interactive CLI.


 '''
![System in use](./images/bank_tech_index.png)


## License

This project is licensed under the MIT License.