package com.example.cucumber1;

import static junit.framework.Assert.assertTrue;

import org.junit.AfterClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.example.framework.EmulationDevice;
import com.example.framework.SelectorBrowser;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class googletest {
	public DesiredCapabilities capabilities;
	public WebDriver browser;
	

	@Given("^\"(.*)?\" is open in \"(.*)?\" and set the emulation to device \"(.*)?\"$")
	public void openbrowser(String arg1, String arg2, String arg3) {

		if(arg3.equals("")){
			browser = SelectorBrowser.createDriverWithOutCapabilities(arg2);
		}else{
			capabilities = EmulationDevice.setEmulator(arg3);
			browser = SelectorBrowser.createDriverWithCapabilities(arg2, capabilities);
		}
		
		browser.get(arg1);
	}

	@When("^I type \"(.*)?\" in the search field$")
	public void enterValue(String arg1) throws InterruptedException {
		
		browser.findElement(By.name("q")).clear();//("gsfi")).clear();
		browser.findElement(By.name("q")).sendKeys(arg1);//("gsfi")).sendKeys(arg1);

	}

	@When("^I click the search button$")
	public void googleSearch() {
		browser.findElement(By.name("btnG")).click();
	}

	@Then("^I see the results for Java$")
	public void checkJavaDowlnoad() {

		WebElement myDynamicElement = (new WebDriverWait(browser, 10))
				.until(ExpectedConditions.presenceOfElementLocated(By.id("main")));

		assertTrue(browser.findElement(By.id("main")).isDisplayed());
	}

	@After
	public void cleanUp() {
		System.out.println("final papa.");
		browser.quit();
	}

}
