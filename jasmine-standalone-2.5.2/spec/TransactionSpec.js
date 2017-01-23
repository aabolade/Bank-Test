(function() {
  describe("Transaction", function() {
    var transaction;

    beforeEach(function() {
      transaction = new Transaction()
    })

    it("has an amount property", function() {

      expect(transaction.amount).toBeDefined()

    })

    it("has a date property", function(){
      expect(transaction.date).toBeDefined()
    })

    it("has a type property", function() {
      expect(transaction.type).toBeDefined()
    })
  })
})();
