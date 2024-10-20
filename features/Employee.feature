Feature: Employee Management


  @Employee
  Scenario Outline: Add a new employee with all fields filled

    Given I login to BrightHR application with valid data "<username>" and "<password>"
    When I fill in the form with valid data "<First Name>" "<last Name>" "<Email>" "<Mobile>" "<startDate>" "<JobTitle>"
    Then Verify that that both employees are displayed with the submitted details "<First Name>" "<last Name>"
    Examples:
      | First Name | last Name | Email                | Mobile     | startDate       | JobTitle      | username             | password     |
      | Ridd       | Test      | RidTest@brighthr.com | 1234567890 | Tue Oct 01 2024 | Test Engineer | leu7edsq@getnada.com | A1234567890- |
      | Ayo        | Test      | AyoTest@brighthr.com | 1234567890 | Fri Oct 25 2024 | Test Engineer | leu7edsq@getnada.com | A1234567890- |