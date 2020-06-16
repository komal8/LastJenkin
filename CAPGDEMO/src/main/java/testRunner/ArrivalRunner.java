package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"C:\\Users\\Amit Jadhav\\eclipse-workspace\\CapGDEMO\\CAPGDEMO\\src\\main\\java\\feature\\Login.feature"},
		glue={"stepDefination"},
		format= {"pretty","html:test-output","junit:junit_xml/cucumber.xml"},
		monochrome=true
		
		)
public class ArrivalRunner {

}
