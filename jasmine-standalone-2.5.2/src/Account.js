(function(exports) {

  function Account() {
    this.balance = 0;
    this.statement = new Statement()
    this.statementView = new StatementView(this.statement)
  }

    Account.prototype.deposit = function(amount) {
      this.balance+= amount;
      this.statement.createTransaction(amount, 'deposit',this.balance)
      return `You have successfully deposited ${amount} into your account`;
    }

    Account.prototype.withdraw = function(amount) {
      if (amount <= this.balance) {
        this.balance-= amount;
        this.statement.createTransaction(amount, 'withdraw', this.balance)
        return "withdrawal successful";
      } else {
        throw Error("You have insufficient funds");
      }
    }

    Account.prototype.printStatement = function() {
      document.getElementById('statement').innerHTML = this.statementView.returnHTML()
    }

  exports.Account = Account;

})(this)
