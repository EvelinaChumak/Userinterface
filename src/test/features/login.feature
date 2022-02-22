Feature: Search

  @automated
  Scenario: User close help box 
    Given the user is on the game page
    When the user types close help
    Then help box is hidden
    
  @automated
  Scenario: User accept cookies 
    Given the user is on the game page
    When the user accept cookies
    Then cookies invisiable

  @automated
  Scenario: Time is 00:00:00 
    Given the user is on the game page
    When user watch on time
    Then time is 00:00:00
