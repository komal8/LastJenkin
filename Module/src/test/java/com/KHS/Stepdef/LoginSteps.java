package com.KHS.Stepdef;

import java.util.Date;
import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	
	@Given("^webDriver initialize$")
	public void webdriver_initialize() throws Throwable {
	   
	}
	
	
	@Given("^user is on login$")
	public void user_is_on_login() throws Throwable {
	   
	}
	
	@When("^user enter \"(.*)\" and \"(.*)\"$")
	public void user_enter_and(String username, String password) throws Throwable {
		System.out.println("username:"+username);
		System.out.println("password:"+password);
	
	}

	/*@When("^user enter username and password$")
	public void user_enter_username_and_password(DataTable credentials) throws Throwable {
	  List<List<String>>data=credentials.raw(); 
	  System.out.println(data.get(0).get(0));
	  System.out.println(data.get(0).get(1));
	  System.out.println(data.get(1).get(0));
	  System.out.println(data.get(1).get(1));
	}*/
	/*public void user_enter_username_and_password(DataTable credentials) throws Throwable {
	Map<String,String>map=(Map<String, String>) credentials.asMaps(String.class, String.class);
	
	
	
	}*/




	@When("^user clicks on submit$")
	public void user_clicks_on_submit() throws Throwable {
	   
	}

	@Then("^user is on Home page$")
	public void user_is_on_Home_page() throws Throwable {
	
	}
/*	@When("^user enter \"(.*)\"and \"(.*)\"$")
	public void user_enter_and(String user1, String pass1) throws Throwable {
	  System.out.println("username"+user1); 
	  System.out.println("password"+pass1);
	}*/
	



@When("^we click on Login$")
public void we_click_on_Login() throws Throwable {

}

@Then("^we are on Homepage$")
public void we_are_on_Homepage() throws Throwable {
    
}
@When("^user is on homepage$")
public void user_is_on_homepage() throws Throwable {
   
}

@Then("^check the title of page$")
public void check_the_title_of_page() throws Throwable {
   
}
	
	}



	






