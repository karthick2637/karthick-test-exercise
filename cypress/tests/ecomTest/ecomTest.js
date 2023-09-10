import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../support/PageObjects/LoginPage"
import CartPage from "../../support/PageObjects/CartPage"

const loginPage = new LoginPage()
const cartPage = new CartPage()


Given('I add four random items to my cart', function() {
    loginPage.elements.launchUrl()
    loginPage.addRandomProducts(this.data.productsCount)
    cy.wait(2000)
})

When('I view my cart', ()=>{
    loginPage.elements.cartLink().click()
})

Then('I find total four items listed in my cart', ()=>{
    cartPage.itemsInCartValidation(4)
})

When('I search for the lowest price item', ()=>{

})

And('I am able to remove the lowest price item from my cart', ()=>{
    cartPage.removeLowestPriceItem()
})

Then('I am able to verify three items in my cart', ()=>{
    cartPage.itemsInCartValidation(3)
})

