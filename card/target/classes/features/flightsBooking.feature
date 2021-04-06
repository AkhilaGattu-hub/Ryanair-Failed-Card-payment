@flightsBooking
Feature: Booking a flight on www.ryanair.com
	As a user
	I want to be able to book a flight
	On www.ryanair.com/ie/en

  Scenario: Booking up to a declined payment on
		Given I am on main page
        And I log in to personal account
		When I make a search for booking from 'Dublin' to 'Berlin' on '12/05/2021' for 2 adults and 1 child
		And I book available flight
		And I select seats for 3 passengers
		And I checkout my booking
		And I fill in adult passenger details 'Mrs', 'Akhila' and 'Gattu'
		And I fill in second adult passenger details 'Mr', 'Ven' and 'Deigo'
		And I fill in child passenger details 'San' and 'Deigo'
		And I fill in contact details country 'Dublin' and phone number '089403003'
		And I fill in card details '5555555555555557', 'MasterCard', '10'/'2018', '265' and 'Akhila Gattu'
		And I fill in billing address details '25 greencourt' and city 'Dublin'
		And I pay for booking
		Then I should get payment declined message