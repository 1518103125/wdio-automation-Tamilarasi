Feature: Add product to the cart and verify

  Scenario: Add a product to cart and check the cart
    Given I launch the SauceDemo site in the browser
    When I enter username as "standard_user" and password as "secret_sauce"
    And I click on the login button
    And I add "Sauce Labs Backpack" to the cart
    And I click on the cart icon
    Then I should see "Sauce Labs Backpack" in the carts