class LoginPage {
  elements = {
    launchUrl: () => cy.visit("https://cms.demo.katalon.com/"),
    addToCartBtn: () => cy.get('a[href*="add-to-cart"]'),
    cartLink: () => cy.get('li.page_item.page-item-8'),
  };

  addRandomProducts(count) {
    this.elements.addToCartBtn().then(($prdt) => {
      const products = Cypress._.map($prdt);
      for (let i = 0; i < count; i++){
        const randomItem = products[Math.floor(Math.random() * products.length)]
        cy.get(randomItem).click();
        const index = products.indexOf(randomItem)
        const x = products.splice(index,1)
      }
    });
  }
}
export default LoginPage;
