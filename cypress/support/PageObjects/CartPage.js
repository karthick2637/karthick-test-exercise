class CartPage {
  elements = {
    productsAdded: () => cy.get("td.product-name"),
    productPrice: () =>
      cy.get("td.product-price span.woocommerce-Price-amount.amount"),
  };

  itemsInCartValidation(expectedCount) {
    this.elements.productsAdded().should("have.length", expectedCount);
  }

  removeLowestPriceItem() {
    this.elements.productPrice().then(($price) => {
      const priceText = Cypress._.map($price, "innerText");
      const itemPrice = priceText.map((price) => price.substring(1));
      const priceInNumberic = itemPrice.map((val) => Number(val));
      const lowestPriceItem = Math.min(priceInNumberic);

      this.elements.productPrice().each(($el, index, $list) => {
        const priceText = $el.text();
        const itemPrice = Number(priceText.substring(1));
        if (itemPrice == lowestPriceItem) {
          this.elements
            .productPrice()
            .eq(index)
            .prevUntil("td a.remove")
            .click();
        }
      });
    });
  }
}
export default CartPage;
