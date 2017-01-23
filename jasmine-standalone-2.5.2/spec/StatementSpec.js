(describe("Statement", function() {

  var statement;
  var amount;

  beforeEach(function() {
    statement = new Statement();
    transaction = jasmine.createSpyObj('transaction', ['amount','date','type'])
  })

  it("stores an array of transactions", function() {
    expect(statement.transactions).toEqual([])
  })

  it("creates a withdrawal and stores it in an array of transactions", function() {
    statement.createTransaction(10, "withdrawal");
    expect(statement.transactions).toContain(transaction)
  })

  it("transactions in the statement must be an instance of transaction", function() {
    statement.createTransaction(10,"withdrawal");
    expect(statement.transactions[0].constructor.name).toEqual("Transaction")
  })

  it("creates a transaction with passed in arguments", function() {
    statement.createTransaction(10, "withdrawal")
    expect(statement.transactions[0].amount).toEqual(10)
    expect(statement.transactions[0].type).toEqual("withdrawal")
  })



}))();
