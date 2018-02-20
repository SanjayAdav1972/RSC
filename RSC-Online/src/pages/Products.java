package pages;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Products extends Page {
	
	public void purhaseBattery(WebDriver driver) throws IOException {
		this.driver = driver;
		
		Properties config = new Properties();
		FileInputStream fis = new FileInputStream(path);
		config.load(fis);
		
		this.driver.findElement(By.xpath(config.getProperty("menuAllProducts"))).click();
		
		WebElement battery = this.driver.findElement(By.xpath(config.getProperty("lnkBatteries")));
		WebElement charger = this.driver.findElement(By.xpath(config.getProperty("lnkBatCharger")));
		
		Actions action = new Actions(driver);
		action.moveToElement(battery).click(charger).build().perform();
		
		this.driver.findElement(By.xpath(config.getProperty("Category1"))).click();
		this.driver.findElement(By.xpath(config.getProperty("addBtn1"))).click();
	}
	
	public void purchaseBrand(WebDriver driver) throws IOException{
		this.driver = driver;
		
		Properties config = new Properties();
		FileInputStream fis = new FileInputStream(path);
		config.load(fis);
		
		this.driver.findElement(By.xpath(config.getProperty("menyOurBrands"))).click();
		WebDriverWait wait = new WebDriverWait(driver, 15);
		
		// Wait till List of brand appears and select ABB brand
		WebElement brandABB = this.driver.findElement(By.xpath(config.getProperty("brandABB")));
		wait.until(ExpectedConditions.elementToBeClickable(brandABB)).click();
			
		// Wait till list of categories appear and select 1st category
		WebElement elementCat1 = this.driver.findElement(By.xpath(config.getProperty("brandCat1")));
		wait.until(ExpectedConditions.elementToBeClickable(elementCat1)).click();
		
		this.driver.findElement(By.xpath(config.getProperty("addBtn1"))).click();
	}
	
	public boolean viewBasketAppear(WebDriver driver) throws IOException {
		boolean basketAppear = false;
		
		this.driver = driver;
		
		Properties config = new Properties();
		FileInputStream fis = new FileInputStream(path);
		config.load(fis);
		
		if (this.driver.findElement(By.xpath(config.getProperty("addToBasketMessage"))).isDisplayed()) {
			basketAppear = true;
		}
		
		return basketAppear;
	}

}
