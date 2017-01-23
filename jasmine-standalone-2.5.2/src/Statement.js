(function(exports) {

  function Statement() {
    this.transactions = [];
  }

  Statement.prototype.createTransaction = function(amount, type) {
    transaction = new Transaction(amount,type)
    this.transactions.push(transaction)
  }

  exports.Statement = Statement;

})(this);
