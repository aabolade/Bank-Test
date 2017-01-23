(function(exports) {

  function Account() {
    this.balance = 0;
    this.statement = "Log"
  }

    Account.prototype.deposit = function(amount) {
      this.balance+= amount;
      statement.createDeposit()
      return "You have successfully deposited 10 into your account";
    }

    Account.prototype.withdraw = function(amount) {
      if (amount <= this.balance) {
        this.balance-= amount;
        statement.createWithdrawal()
        return "withdrawal successful";
      } else {
        throw Error("You have insufficient funds");
      }
    }

    Account.prototype.printStatement = function() {

    }

  exports.Account = Account;

})(this)
