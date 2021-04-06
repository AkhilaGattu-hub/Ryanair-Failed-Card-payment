$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/USER/eclipse-workspace/card/src/main/resources/features/flightsBooking.feature");
formatter.feature({
  "name": "Booking a flight on www.ryanair.com",
  "description": "\tAs a user\n\tI want to be able to book a flight\n\tOn www.ryanair.com/ie/en",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@flightsBooking"
    }
  ]
});
formatter.scenario({
  "name": "Booking up to a declined payment on",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@flightsBooking"
    }
  ]
});
formatter.step({
  "name": "I am on main page",
  "keyword": "Given "
});
formatter.match({
  "location": "BasePageSteps.iAmOnMainPage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat driver.FactoryDriver.createNewDriver(FactoryDriver.java:59)\r\n\tat driver.FactoryDriver.getInstance(FactoryDriver.java:43)\r\n\tat steps.BasePageSteps.iAmOnMainPage(BasePageSteps.java:17)\r\n\tat ✽.I am on main page(C:/Users/USER/eclipse-workspace/card/src/main/resources/features/flightsBooking.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I log in to personal account",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.iLogInToPersonalAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I make a search for booking from \u0027Dublin\u0027 to \u0027Berlin\u0027 on \u002712/05/2021\u0027 for 2 adults and 1 child",
  "keyword": "When "
});
formatter.match({
  "location": "FlightsSearchPageSteps.iMakeFlightSearch(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I book available flight",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsBookingPageSteps.iBookFlight()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select seats for 3 passengers",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsBookingSeatsSelectionPageSteps.iSelectSeatsForPassengers(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I checkout my booking",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsBookingExtrasPageSteps.iCheckoutMyBooking()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I fill in adult passenger details \u0027Mrs\u0027, \u0027Akhila\u0027 and \u0027Gattu\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsBookingPaymentPageSteps.iFillInAdultPassengerDetails(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I fill in second adult passenger details \u0027Mr\u0027, \u0027Ven\u0027 and \u0027Deigo\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsBookingPaymentPageSteps.iFillInSecondAdultPassengerDetails(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I fill in child passenger details \u0027San\u0027 and \u0027Deigo\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsBookingPaymentPageSteps.iFillInChildPassengerDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I fill in contact details country \u0027Dublin\u0027 and phone number \u0027089403003\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsBookingPaymentPageSteps.iFillInContactDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I fill in card details \u00275555555555555557\u0027, \u0027MasterCard\u0027, \u002710\u0027/\u00272018\u0027, \u0027265\u0027 and \u0027Akhila Gattu\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsBookingPaymentPageSteps.iFillInCardDetailsVisaAndJohnSmith(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I fill in billing address details \u002725 greencourt\u0027 and city \u0027Dublin\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsBookingPaymentPageSteps.iFillInBillingAddressDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I pay for booking",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsBookingPaymentPageSteps.iPayForBooking()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should get payment declined message",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightsBookingPaymentPageSteps.iGetPaymentDeclinedMessage()"
});
formatter.result({
  "status": "skipped"
});
});