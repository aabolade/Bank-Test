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

  })
})();
