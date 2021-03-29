

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.MediaEntityBuilder;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;

public class LakmeForm {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		FormSearch();

	}
	
	public static void FormSearch() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\vanit\\eclipse-workspace\\SeleniumTesting\\drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		
		ExtentHtmlReporter htmlreports = new ExtentHtmlReporter("Reports.html");
		// initialize ExtentReports and attach the HtmlReporter
		ExtentReports extent = new ExtentReports();

		// attach only HtmlReporter
		extent.attachReporter(htmlreports);
		
		ExtentTest test = extent.createTest("LakmeFormTest");
		
		
		driver.get("https://www.lakme-academy.com/");
		driver.findElement(By.className("closebtn")).click();
		
		//WebElement element =  driver.findElement(By.id("block-student-enquiry-form-student-enquiry-form"));
		WebElement element = driver.findElement(By.className("form_icon"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(true);", element);
		
		
		 
		 
		 
		driver.findElement(By.id("b_name")).sendKeys("Testing");
		driver.findElement(By.id("b_email")).sendKeys("testing.test@test.com");
		driver.findElement(By.id("b_mobile")).sendKeys("8080776980");
		
		
		
		 
		         WebElement l = driver.findElement(By.id("b_course_id"));
		         // select option by Select class
		         Select s = new Select(l);
		         // selectByVisibleText to choose an option
		         s.selectByVisibleText("Make-up");
		         
		      // Waits for 20 seconds
		         WebDriverWait wait = new WebDriverWait(driver, 20);

		         // Wait until expected condition size of the dropdown increases and becomes more than 1
		         wait.until((ExpectedCondition<Boolean>) new ExpectedCondition<Boolean>(){
		             public Boolean apply(WebDriver driver)  
		             {
		                 Select select = new Select(driver.findElement(By.id("b_state_id")));
		                 return select.getOptions().size()>1;
		             }
		         });

		         //To select the first option
		         Select select = new Select(driver.findElement(By.id("b_state_id")));
		         select.selectByVisibleText("ASSAM");
		         
		         wait.until((ExpectedCondition<Boolean>) new ExpectedCondition<Boolean>(){
		             public Boolean apply(WebDriver driver)  
		             {
		                 Select select = new Select(driver.findElement(By.id("b_City_name")));
		                 return select.getOptions().size()>1;
		             }
		         });

		         //To select the first option
		         Select selects = new Select(driver.findElement(By.id("b_City_name")));
		         selects.selectByVisibleText("GUWAHATI - TARUN NAGAR");
			

		
		
		driver.findElement(By.id("student_enquiry_form_submit")).click();
		test.info("This step shows test case is passed");
		extent.flush();
		
		
		
		
}

}