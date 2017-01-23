(function(exports) {

  function Transaction(amount, type, balance) {
    this.amount = amount;
    this.date = new Date()
    this.type = type;
    this.balance = balance;
  }

  Transaction.prototype.formatDate = function(date) {
    var formattedDate = `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`
    return formattedDate
  }

  exports.Transaction = Transaction;

})(this);
