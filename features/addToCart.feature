Feature: checking out the added product in the cart

  Scenario: product is checked and finished the transaction

    Given I launch the SauceDemo site in the browser
    When I enter username as "standard_user" and password as "secret_sauce"
    And I click on the login button
    And I add "Sauce Labs Backpack" to the cart
    And I click on the cart icon
    And I should see "Sauce Labs Backpack" in the carts
    And I should see the checkout button
    And I enter the first name as "Tamilarasi", last name as "Gowtham" and postal code as "636006"  
    And I click on the continue button
    And I click on the finish button
    Then I should see the message "THANK YOU FOR YOUR ORDER"