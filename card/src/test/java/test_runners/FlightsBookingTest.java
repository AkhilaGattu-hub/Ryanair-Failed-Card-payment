package test_runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        glue = {"steps"},
        tags = { "@flightsBooking" },
        features={ "C:\\Users\\USER\\eclipse-workspace\\card\\src\\main\\resources\\features\\flightsBooking.feature" },
        plugin = { "pretty", "html:target/cucumber-reports/FlightsBookingTest/"}
)
public class FlightsBookingTest extends BaseTestRunner {
}
