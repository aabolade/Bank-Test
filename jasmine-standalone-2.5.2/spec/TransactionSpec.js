(function() {
  describe("Transaction", function() {
    var transaction;

    beforeEach(function() {
      amount = 50;
      type = "deposit"
      transaction = new Transaction(amount, type)
    })

    it("has an amount property", function() {
      expect(transaction.amount).toEqual(amount)
    })

    it("has a date property", function(){
      expect(transaction.date.constructor.name).toEqual("Date")
    })

    it("has a type property", function() {
      expect(transaction.type).toEqual(type)
    })
  })
})();
