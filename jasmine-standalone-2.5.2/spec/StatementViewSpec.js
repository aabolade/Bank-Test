(function() {
  describe("Statement View", function() {
    var statementView;


    beforeEach(function() {
      statement = new Statement()
      statementView = new StatementView(statement);
    })

    it("stores an instance of Statement", function() {
      expect(statementView.statement.constructor.name).toEqual("Statement")
    })

    it("prints out the contents of statement in HTML", function() {
      expect(statementView.returnHTML()).toEqual('<table><tr><th>Date</th><th>Credit</th><th>Debit</th><th>Balance</th></tr></table>')
    })

    describe("with a transaction", function(){

      beforeEach(function() {

        var transaction =  {
          amount : 10,
          date: "12/2/1999",
          type: "deposit",
          balance: 123
        }

        statementView.statement.transactions.push(transaction)

      })

      // it("prints out the contents from the statement into HTML", function() {
      //   expect(statementView.returnHTML()).toEqual('<table><tr><th>Date</th><th>Credit</th><th>Debit</th><th>Balance</th></tr><tr><td>12/2/1999</td><td>10</td><td></td><td>123</td></tr></table>')
      // })
    })



  })
})();
