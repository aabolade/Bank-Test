(function(exports) {

  function Statement() {
    this.transactions = [];
  }

  Statement.prototype.createWithdrawal = function(amount) {
    this.transactions.push(amount)
  }

  Statement.prototype.createDeposit = function(amount) {
    this.transactions.push(amount)
  }

  exports.Statement = Statement;

})(this);
