
(describe("Account", function() {

  var account;

  beforeEach(function() {
    account = new Account()
    statement = jasmine.createSpyObj('statement', ['createWithdrawal'])
  })

  it("the balance should start at zero", function() {
    expect(account.balance).toEqual(0)
  })

  it("has a statement", function() {
    expect(account.statement).toBeDefined()
  })

  describe("making a withdrawal", function() {

    describe("with insufficent funds", function() {

      it("throws an error", function() {
        expect(function() {account.withdraw(10)}).toThrow(new Error("You have insufficient funds"))
      })
    })

    describe("with sufficient funds", function() {

      beforeEach(function() {
        account.deposit(11);
      })

      it("accepts the withdrawal when there is sufficient funds", function() {
        expect(account.withdraw(10)).toEqual("withdrawal successful")
      })

      it("decreases the balance by the withdrawal amount", function() {
        account.withdraw(10);
        expect(account.balance).toEqual(1)
      })

    })

  })


  describe("make a deposit", function() {

    it("on success returns a message confirming the deposit", function() {
      expect(account.deposit(10)).toEqual("You have successfully deposited 10 into your account")
    })

    it("making a deposit increases the account balance", function() {
      account.deposit(1000);
      expect(account.balance).toEqual(1000)
    })
  })

  describe("printing a statement", function() {
    it("lists the latest transactions", function() {
      expect(account.printStatement).toBeDefined()
    })
  })

}))();
