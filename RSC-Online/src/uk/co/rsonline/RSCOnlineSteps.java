package uk.co.rsonline;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.BasketSummary;
import pages.HomePage;
import pages.Products;


public class RSCOnlineSteps {
	public static Logger log = Logger.getLogger("devpinoyLogger");
	public static WebDriver driver;
	String path = System.getProperty("user.dir") + "\\properties\\Config.Properties";
	
	
	@Given("I login into RS online website home page")
	public void I_login_into_RS_online_website_home_page() throws IOException {
		log.info("I login into RS online website home page");
		
		Properties config = new Properties();
		FileInputStream fis = new FileInputStream(path);
		config.load(fis);
		
		if (config.getProperty("browser").equals("firefox")){
			driver = new FirefoxDriver();
		} else if (config.getProperty("browser").equals("chrome")){
			System.setProperty("webdriver.chrome.driver", "D:\\Projects\\RSC\\RSC-Online\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		
		driver.get(config.getProperty("websiteurl"));
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Long.parseLong(config.getProperty("implicit.wait")), TimeUnit.SECONDS);

		HomePage home = new HomePage();
		home.selectHomePage(driver);
	}
	
	@And("I ensure my basket is empty")
	public void I_ensure_my_basket_is_empty() {
		log.info("I ensure my basket is empty");
		
		// Here I#m making basket empty as we are not doing purchase
		// Also we are adding 1 item at a time. So remove is added earlier item
		BasketSummary basket = new BasketSummary();
		try {
			basket.emptyBasket(driver);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@When("I search battery chargers in All Products and added 1 item")
	public void I_search_battery_chargers_in_All_Products_and_added_1_item() {
		log.info("I search battery chargers in All Products and added 1 item");
		
		Products product = new Products();
		try {
			product.purhaseBattery(driver);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Then("I verify 1 item get added in basket")
	public void I_verify_1_item_get_added_in_basket() throws IOException {
		log.info("I verify 1 item get added in basket");
		
		Products product = new Products();
		if (product.viewBasketAppear(driver))
		{
			System.out.println("Item added successfully");
			log.debug("Item added successfully");
		}
		
		if (driver != null) {
			driver.quit();
		}
	}
}
