Feature: It is Login

    Make sure the login process is success
Scenario Outline: Login
    Given I am on the Orange HRM page
    When I input username with "<username>"
    And I input password with "<password>"
    And I click button Login
    Then The page should contain "<expect>"

  Examples:
    | username          | password   | expect |
    | Admin             | admin123   | Dashboard |
    | Admin             | admin321   | Invalid credentials |
    | admin             | admin123   | Invalid credentials |
    | admin123          | admin123   | Invalid credentials |
    | testes            | admin123   | Invalid credentials |
    | Admin             | Admin123   | Invalid credentials |
    | Admin             | Admin321   | Invalid credentials |