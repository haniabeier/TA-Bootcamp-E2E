Feature: Bootcamp E2E

  Testing newegg page

  Background: Background name
    Given I am on the newegg home page
    Then I close the promo banner if it appears

  @search
  Scenario: Search bar
    When As a user I type the word "Windows" in the search bar
    Then I click the search button
    Then I can see that at least one item appears as a search result

  @logo
  Scenario: Internet shop logo button
    When I open the "Today's Best Deals" tab
    Then I click on the Internet shop logo in the header
    Then I can see that the newegg home page opened