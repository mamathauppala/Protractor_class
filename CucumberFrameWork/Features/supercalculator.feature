Feature: LeafTaps Login
    Scenario Outline: Login into Leaftaps
        Given Launch Leaftaps URL
        When Enter Username "<username>"
        And Enetr Password "<password>"
        Then Click Login Button
        Then Print UserName
        Then Click Logout

        Examples:
        | username | password |
        | Demosalesmanager  | crmsfa  |