Feature: Homepage  
Scenario: check for Homepage the three sliders
Given open the url
Then click on shop menu
Then click on the Home menu button
And check whether Home page is three slider



Scenario: check for Homepage for the three Arrivals
Given open the url
Then click on shop menu
Then click on the Home menu button
Then check whether the home page has three arrivals


Scenario: navigate to arrival image
Given open the url
Then click on shop menu
Then click on the Home menu button
Then check whether the home page has three arrivals
Then click the image in the arrivals
And check whether it navigating to next page
And add book to basket
And image should clickable
Then user can add that book to his basket
