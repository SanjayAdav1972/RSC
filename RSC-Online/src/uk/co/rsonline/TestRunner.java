package uk.co.rsonline;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format = {"html:format"}, 
			features = "D:\\Projects\\RSC\\RSC-Online\\src\\uk\\co\\rsonline\\RSCOnline.feature")
public class TestRunner {

}
