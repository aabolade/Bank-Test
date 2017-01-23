(function(exports) {

  function Transaction(amount, type, balance) {
    this.amount = amount;
    this.date = new Date()
    this.type = type;
    this.balance = 10;
  }

  exports.Transaction = Transaction;

})(this);
