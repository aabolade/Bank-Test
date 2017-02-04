(function() {
  describe("Transaction", function() {
    var transaction;

    beforeEach(function() {
      amount = 50;
      type = "deposit"
      balance = 10
      transaction = new Transaction(amount, type, balance)
    })

    it("has an amount property", function() {
      expect(transaction.amount).toEqual(amount)
    })

    it("has a balance property", function() {
      expect(transaction.balance).toEqual(balance)
    })

    it("has a date property", function(){
      expect(transaction.date.constructor.name).toEqual("Date")
    })

    it("has a type property", function() {
      expect(transaction.type).toEqual(type)
    })
  })
})();
