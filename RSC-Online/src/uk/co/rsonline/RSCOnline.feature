Feature: RS Online End 2 End testing

  Background: RS Component website is up and running
    			List of Scenarios covered:
    			01. E2E test_Home to Check out for battery charger from All Products
					02. E2E test_Home to check out ABB product from Our Brands

  Scenario: 01. E2E test_Home to Check out for battery charger from All Products
    Given I login into RS online website home page
    And I ensure my basket is empty
    When I search 'battery chargers in All Products' and added 1 item
    Then I verify 1 item get added in basket

  Scenario: 02. E2E test_Home to check out ABB product from Our Brands
    Given I login into RS online website home page
    And I ensure my basket is empty
    When I search 'ABB product in Our Brands' and added 1 item
    Then I verify 1 item get added in basket
