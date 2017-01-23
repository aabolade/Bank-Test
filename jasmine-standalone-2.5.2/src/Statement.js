(function(exports) {

  function Statement() {
    this.transactions = [];
  }

  Statement.prototype.createTransaction = function(amount, type, balance) {
    transaction = new Transaction(amount,type,balance)
    this.transactions.push(transaction)
  }

  exports.Statement = Statement;

})(this);
