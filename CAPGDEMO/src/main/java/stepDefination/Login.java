package stepDefination;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Login {
	WebDriver driver;
	
	
	@Given("^open the url$")
	public void open_the_url() throws Throwable {
	   
		
		System.setProperty("webdriver.chrome.driver", ".\\Driver\\chromedriver.exe");
driver=new ChromeDriver();
			 driver.manage().window().maximize();
			 driver.get("http://practice.automationtesting.in/");
			 
	}

	@Then("^click on shop menu$")
	public void click_on_shop_menu() throws Throwable {
		 
List<WebElement>TotalList=	driver.findElements(By.tagName("a"));
int total=TotalList.size();
System.out.println("List size :" +total);
driver.findElement(By.xpath("//*[@id='menu-item-40']")).click();
Thread.sleep(2000);

	 
	}

	@Then("^click on the Home menu button$")
	public void click_on_the_Home_menu_button() throws Throwable {
		driver.findElement(By.xpath("//*[text()='Home']")).click();
	System.out.println(driver.getTitle());	
	   
	}

	@Then("^check whether Home page is three slider$")
	public void check_whether_Home_page_is_three_slider() throws Throwable {
		driver.switchTo().frame("aswift_1");
		List<WebElement>slider=driver.findElements(By.xpath("//img[@class='n2-ss-slide-background-image n2-ss-slide-fill n2-ow']"));
int TotalSlider=slider.size();
System.out.println("total slider:" +TotalSlider);
	}
	@Then("^check whether the home page has three arrivals$")
	public void check_whether_the_home_page_has_three_arrivals() throws Throwable {
List<WebElement>Arrivals=		driver.findElements(By.xpath("//*[@class='themify_builder_sub_row clearfix gutter-default   sub_row_1-0-2']"));
	int total_arrival=	Arrivals.size();
	System.out.println("total arrivals are:"+total_arrival);
	    
	}
	@Then("^click the image in the arrivals$")
	public void click_the_image_in_the_arrivals() throws Throwable {
		
		driver.findElement(By.xpath("//*[text()='Sale!']")).click();
	 
	}

	@Then("^check whether it navigating to next page$")
	public void check_whether_it_navigating_to_next_page() throws Throwable {
	System.out.println(driver.getTitle());    
	}

	@Then("^add book to basket$")
	public void add_book_to_basket() throws Throwable {
	  driver.findElement(By.xpath("//*[@class='single_add_to_cart_button button alt']")).click();
	}

	@Then("^image should clickable$")
	public void image_should_clickable() throws Throwable {
driver.findElement(By.id("pp_full_res")).click();
	}

	@Then("^user can add that book to his basket$")
	public void user_can_add_that_book_to_his_basket() throws Throwable {
	  driver.findElement(By.xpath("//*[text()='View Basket']")).isDisplayed();
	System.out.println(driver.getTitle());  
	}





}
