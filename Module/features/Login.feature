Feature: Login feature
Background: webDriver
Given webDriver initialize
@smoke
Scenario Outline: positive login scenario
Given user is on login
When user enter "<username>"and "<password>"
##When user enter "komalk" and "komu@8"
##|username|password|
##|komal|komu@123|
##|amit|curie@8|
And user clicks on submit
Then user is on Home page
Examples:
|username|password|
|komal|komu@123|
|amit|curie@8|

##Scenario Outline: positive login scenario
##Given user is on login
##When user enter "<username>"and wrong"<password>"
##Then user check name
##Examples:
##|cap|capg@34|
@sanity
Scenario: Homepage scenario
When we click on Login
Then we are on Homepage

@smoke
Scenario: Title
When user is on homepage
Then check the title of page 

