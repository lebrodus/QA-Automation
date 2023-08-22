Feature: End to End Ecommerce validation

    application regression

    Scenario: Ecommerce products delivery
    Given I open the Ecommerce page
    When I add items to cart
    Then validate the total amount
    Then select country submit and verify success message 


    Scenario: Filling the form to shop.
    Given I open the Ecommerce page
    When I fill the form details
    Then validate the form behavior
    Then I click on the shop page