(function(exports) {

  function Account() {
    this.balance = 0;
  }

    Account.prototype.deposit = function(amount) {
      this.balance+= amount;
    }

    Account.prototype.withdraw = function(amount) {
      if (amount <= this.balance) {
        return "withdrawal successful"
      } else {
        throw Error("You have insufficient funds")
      }
    }

  exports.Account = Account;

})(this)
