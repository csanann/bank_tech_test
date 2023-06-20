# Bank Account Transaction System

This is a very simple account transaction system written in Node.js. The system allows users to make deposits and withdrawals and the ability to print the transaction statement.

## Overview

The Bank Account Transaction System aims to emulate simple banking operations. It is designed as a helpful tool for users who want to manage their personal finances or developers seeking to understand basic banking functionality.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Ensure you have met the following requirements:
* You have Node.js and npm installed on your local environment. If you do not have these yet, please find the installation details here: https://nodejs.org/en/download 

### Installing

1. Clone the project repository: 'git clone https://github.com/csanann/bank_tech_test.git'
2. Navigate to the project directory: 'cd bank_tech_test'
3. install the dependencies: 'npm install'

## Usage

The 'src/bank_account.js' file contains the 'BankAccount' class, which you can use to perform various bank operations.

## Running the Tests

Ensure that your application is functioning as expected by running tests: 'npx jest' or 'npm test'

## Design

The codebase consists of a single class, 'BankAccount', responsible for maintaining the balance and transaction history. It handles deposits, withdrawals, balance checks and printing of statements.

The class diagram would look like this:

BankAccount
-----------
- balance: number
- transactions: array
- deposit(amount: number): void
- withdraw(amount: number): void
- getBalance(): number
- printStatement(): void

The 'BankAccount' class has two fields-balance(a number)and transactions(an array of objects). It has four methods for handling the deposits, withdrawals, balance checking, and printing the statement.

## Screenshots

For a visual overview of the system in action, refer to the following screenshots:
![System in use](./src/bank_tech.png)

