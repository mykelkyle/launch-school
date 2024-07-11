function makeBank() {
  let accounts = [];

  function makeAccount(accountNumber) {
    let balance = 0;
    let transactions = [];

    return {
      number() {
        return accountNumber;
      },

      balance() {
        return balance;
      },

      transactions() {
        return transactions;
      },

      deposit(value) {
        balance += value;
        transactions.push({ type: "deposit", amount: value });
        return value;
      },

      withdraw(value) {
        if (balance < value) {
          value = balance;
        }

        balance -= value;
        transactions.push({ type: "withdrawal", amount: value });
        return value;
      },
    };
  }

  return {
    accountNumber: 101,

    openAccount() {
      let account = makeAccount(this.accountNumber);
      this.accountNumber += 1;
      accounts.push(account);
      return account;
    },

    transfer(source, destination, value) {
      return destination.deposit(source.withdraw(value));
    },
  };
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [{...}]
