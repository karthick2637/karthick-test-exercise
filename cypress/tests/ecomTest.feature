Feature: Ecommerce product selection and validation test

    This feature is specific to Ecommerce order validation by selecting products to cart and validating the same in cart

    Scenario: Product selection in the ecommerce site and updating as well as validating the same in the cart
        Given I add four random items to my cart
        When I view my cart
        Then I find total four items listed in my cart
        When I search for the lowest price item
        And I am able to remove the lowest price item from my cart
        Then I am able to verify three items in my cart