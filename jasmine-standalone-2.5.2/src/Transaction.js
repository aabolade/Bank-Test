(function(exports) {

  function Transaction(amount, type) {
    this.amount = amount;
    this.date = new Date()
    this.type = type;
  }

  exports.Transaction = Transaction;

})(this);
