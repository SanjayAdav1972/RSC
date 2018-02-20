package pages;

import org.openqa.selenium.WebDriver;

// Base class for all pages
public class Page {
	public WebDriver driver;
	
	// Path of Object repository properties file
	String path = System.getProperty("user.dir") + "\\properties\\OR.Properties";
	
	// Path of Object config properties file
	String patConfigh = System.getProperty("user.dir") + "\\properties\\Config.Properties";

}