
(describe("Account", function() {

  var account;

  beforeEach(function() {
    account = new Account()
    spyOn(account.statement, 'createTransaction')
    spyOn(account.statementView, 'returnHTML')
  })

  it("the balance should start at zero", function() {
    expect(account.balance).toEqual(0)
  })

  it("the statement is an instance of the Statement object", function() {
    expect(account.statement.constructor.name).toEqual("Statement")
  })

  it("stores an instance of a Statement View", function() {
    expect(account.statementView.constructor.name).toEqual("StatementView")
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

      it("creates a new withdrawal transaction", function() {
        account.withdraw(10)
        expect(account.statement.createTransaction).toHaveBeenCalledWith(10, 'withdraw',account.balance)
      })

    })

  })


  describe("make a deposit", function() {

    it("on success returns a message confirming the deposit", function() {
      expect(account.deposit(10)).toEqual("You have successfully deposited 10 into your account")
      expect(account.deposit(100)).toEqual("You have successfully deposited 100 into your account")
    })

    it("making a deposit increases the account balance", function() {
      account.deposit(1000);
      expect(account.balance).toEqual(1000)
    })

    it("creates a new deposit transaction", function() {
      account.deposit(100);
      expect(account.statement.createTransaction).toHaveBeenCalledWith(100, 'deposit', account.balance)
    })
  })

  describe("printing a statement", function() {
    it("lists the latest transactions", function() {
      account.printStatement()
      expect(account.statementView.returnHTML).toHaveBeenCalled()
    })
  })

}))();
