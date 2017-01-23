(function(exports) {

  function StatementView(statement) {
    this.statement = statement;
  }

  StatementView.prototype.returnHTML = function() {

    var openTag = "<table><tr><th>Date</th><th>Credit</th><th>Debit</th><th>Balance</th></tr>";
    var contentHTML = "";

    this.statement.transactions.forEach(function(element) {

      if(element.type === "deposit") {
        contentHTML+= `<tr><td>${element.formatDate()}</td><td>${element.amount}</td><td></td><td>${element.balance}</td></tr>`
      } else {
        contentHTML+= `<tr><td>${element.formatDate()}</td><td></td><td>${element.amount}</td><td>${element.balance}</td></tr>`
      }
    })
    return openTag += contentHTML + "</table>"

  }

  exports.StatementView = StatementView;

})(this);
