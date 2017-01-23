(describe("Statement", function() {

  var statement;

  beforeEach(function() {
    statement = new Statement()
    withdrawal = jasmine.createSpyObj('withdrawal', ['amount', 'date'])
    deposit = jasmine.createSpyObj('deposit', ['amount', 'date'])
  })

  it("stores an array of transactions", function() {
    expect(statement.transactions).toEqual([])
  })

  it("creates a withdrawal and stores it in an array of transactions", function() {
    statement.createWithdrawal(withdrawal)
    expect(statement.transactions).toContain(withdrawal)
  })

  it("creates a deposit and stores it in an array of transactions", function() {
    statement.createDeposit(deposit)
    expect(statement.transactions).toContain(deposit)
  })

}))();
