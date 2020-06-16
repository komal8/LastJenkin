Feature: Login feature
Scenario: positive login scenario
Given user is on login
When user enter username and password
|username|password|Parameter|
|komal|komu@123|



And user clicks on submit
Then user is on Home page





