Feature: Search

  @tc_search_001 @automated
  Scenario: User close help box 
    Given the user is on the game page
    When the user types close help
    Then help box is hidden
    
  @tc_search_002 @automated
  Scenario: User accept cookies 
    Given the user is on the game page
    When the user accept cookies
    Then cookies invisiable
