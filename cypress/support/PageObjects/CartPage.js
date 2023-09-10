class CartPage {
  elements = {
    productsAdded: () => cy.get('input[title="Qty"]'),
    productPrice: () =>
      cy.get("td.product-price span.woocommerce-Price-amount.amount"),
    removeItem : () => cy.get('a[aria-label="Remove this item"]')
  };

  itemsInCartValidation(expectedCount) {
    this.elements.productsAdded().then(($qty) => {
      const value = Cypress._.map($qty, "value");
      const valueInNumberic = value.map((val) => Number(val));
      let total = valueInNumberic.reduce((sum, val)=> sum+val,0)
      expect(total).to.equal(expectedCount)
  })
}

  removeLowestPriceItem() {
    this.elements.productPrice().then(($price) => {
      const priceText = Cypress._.map($price, "innerText");
      const itemPrice = priceText.map((price) => price.substring(1));
      const priceInNumberic = itemPrice.map((val) => Number(val));
      const lowestPriceItem = Math.min.apply(Math, priceInNumberic);
      cy.log(lowestPriceItem)

      this.elements.productPrice().each(($el, index, $list) => {
        const priceText = $el.text();
        const itemPrice = Number(priceText.substring(1));
        if (itemPrice == lowestPriceItem) {
          this.elements
            .removeItem()
            .eq(index)
            .click();
            cy.wait(2000)
        }
      });
    });
  }
}
export default CartPage;
