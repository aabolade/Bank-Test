(function(exports) {

  function Account() {
    this.balance = 0;
    this.statement = new Statement()
  }

    Account.prototype.deposit = function(amount) {
      this.balance+= amount;
      this.statement.createTransaction(amount, 'deposit')
      return "You have successfully deposited 10 into your account";
    }

    Account.prototype.withdraw = function(amount) {
      if (amount <= this.balance) {
        this.balance-= amount;
        this.statement.createTransaction(amount, 'withdraw')
        return "withdrawal successful";
      } else {
        throw Error("You have insufficient funds");
      }
    }

    Account.prototype.printStatement = function() {

    }

  exports.Account = Account;

})(this)
