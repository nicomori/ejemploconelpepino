package com.example.framework;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

public class SelectorBrowser {

	private static WebDriver driver = null;

	public static WebDriver createDriverWithCapabilities(String browser, DesiredCapabilities capabilities) {

		switch (browser) {
		case "Firefox":
			driver = OpenBrowserFirefox.openBowser();
			break;
		case "firefox":
			driver = OpenBrowserFirefox.openBowser();
			break;
		case "InternetExplorer":
			driver = OpenBrowserInternetExplorer.openBrowser();
			break;
		case "internetexplorer":
			driver = OpenBrowserInternetExplorer.openBrowser();
			break;
		case "IE":
			driver = OpenBrowserInternetExplorer.openBrowser();
			break;
		case "ie":
			driver = OpenBrowserInternetExplorer.openBrowser();
			break;
		case "Chrome":
			driver = OpenBrowserChrome.openBowserWithCapabilities(capabilities);
			break;
		case "chrome":
			driver = OpenBrowserChrome.openBowserWithCapabilities(capabilities);
			break;
		default:
			driver = OpenBrowserChrome.openBowserWithCapabilities(capabilities);
			break;

		}

		return driver;

	}

	
	public static WebDriver createDriverWithOutCapabilities(String browser) {

		switch (browser) {
		case "Firefox":
			driver = OpenBrowserFirefox.openBowser();
			break;
		case "firefox":
			driver = OpenBrowserFirefox.openBowser();
			break;
		case "InternetExplorer":
			driver = OpenBrowserInternetExplorer.openBrowser();
			break;
		case "internetexplorer":
			driver = OpenBrowserInternetExplorer.openBrowser();
			break;
		case "IE":
			driver = OpenBrowserInternetExplorer.openBrowser();
			break;
		case "ie":
			driver = OpenBrowserInternetExplorer.openBrowser();
			break;
		case "Chrome":
			driver = OpenBrowserChrome.openBowserWithOutCapabilities();
			break;
		case "chrome":
			driver = OpenBrowserChrome.openBowserWithOutCapabilities();
			break;
		default:
			driver = OpenBrowserChrome.openBowserWithOutCapabilities();
			break;

		}

		return driver;

	}
}
