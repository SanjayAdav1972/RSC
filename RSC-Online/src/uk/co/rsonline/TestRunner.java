package uk.co.rsonline;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format = {"pretty", "html:format/"}, 
			features = "src/uk/co/rsonline/",
			glue = {"uk.co.rsonline/"})
public class TestRunner {

}

//html:format
//format = {"pretty", "json:target/"}
//features = "D:\\Projects\\RSC\\RSC-Online\\src\\uk\\co\\rsonline\\RSCOnline.feature")