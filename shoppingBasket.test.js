const Candy = require('./candy');
const Basket = require('./shoppingBasket')

describe('Basket', () => {
  beforeEach(() => {
    basket = new Basket();
   })

  it('adds up the total price of products', () => {
    expect(basket.getTotalPrice()).toEqual(0)
  })

  it('can add items to the shopping basket', () => {
    let mySnickers = new Candy("Snickers", 0.80)
    basket.addItem(mySnickers)
    // expect(basket.getTotalItems()[0]["name"]).toContain("Snickers")
    //or
    expect(basket.getTotalItems()).toContain(mySnickers)
  })
})