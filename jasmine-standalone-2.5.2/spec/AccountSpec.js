
(describe("Account", function() {

  var account;

  beforeEach(function() {
    account = new Account()
  })

  it("the balance should start at zero", function() {
    expect(account.balance).toEqual(0)
  })

  describe("making a withdrawal", function() {

    it("throws an error if you have insufficient funds", function() {
      expect(function() {account.withdraw(10)}).toThrow(new Error("You have insufficient funds"))
    })

    it("accepts the withdrawal when there is sufficient funds", function() {
      account.deposit(11)
      expect(account.withdraw(10)).toEqual("withdrawal successful")
    })
  })

  describe("make a deposit", function() {

    it("making a deposit increases the account balance", function() {
      account.deposit(1000)
      expect(account.balance).toEqual(1000)
    })
  })

}))();
