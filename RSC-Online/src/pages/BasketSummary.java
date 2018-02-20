package pages;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class BasketSummary extends Page {

	public HomePage emptyBasket(WebDriver driver) throws IOException {
		this.driver = driver;
		
		Properties config = new Properties();
		FileInputStream fis = new FileInputStream(path);
		config.load(fis);
		
		this.driver.findElement(By.xpath(config.getProperty("basketSummary"))).click();
		
		if (this.driver.findElements(By.xpath(config.getProperty("clearBasket"))).size()>0) {
			System.out.println("Items are exists in basket. Clear basket");
			this.driver.findElement(By.xpath(config.getProperty("clearBasket"))).click();
			Alert alert = this.driver.switchTo().alert();
			alert.accept();
		}
		
		HomePage home = new HomePage();
		home.selectHomePage(this.driver);
		return home;
	}
}
