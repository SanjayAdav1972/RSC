Feature: RS Online End 2 End testing

Background:

Scenario: 01. E2E test_Home to Check out for battery charger
	Given I login into RS online website home page
	And I ensure my basket is empty
	When I search battery chargers in All Products and added 1 item
	Then I verify 1 item get added in basket