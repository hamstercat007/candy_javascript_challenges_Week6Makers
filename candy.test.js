const Candy = require('./candy')

describe('Candy', () => {
  beforeEach(() => {
    candy = new Candy('Mars', 4.99)
  })

  it('.getName will return the name of the candy', () => {
    expect(candy.getName()).toEqual('Mars')
  })
  it('.getPrice will return the price of the candy', () => {
    expect(candy.getPrice()).toEqual(4.99)
  })
})