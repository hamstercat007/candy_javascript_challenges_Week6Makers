class ShoppingBasket {
  constructor() {
    this.totalItems = []
    this.discount = 0;
  }

  applyDiscount(discount) {
    discount = this.discount;
  }

  getTotalItems() {
    return this.totalItems
  }

  getTotalPrice() {
    return 0;
  }

  addItem(candy) {
    this.totalItems.push(candy);
  }
}

module.exports = ShoppingBasket