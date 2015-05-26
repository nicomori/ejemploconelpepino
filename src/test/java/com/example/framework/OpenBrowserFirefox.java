package com.example.framework;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class OpenBrowserFirefox {
	
public static WebDriver openBowser(){
		
		WebDriver driver = new FirefoxDriver();
		driver.manage().window().maximize();
		
		return driver;
	}
}
