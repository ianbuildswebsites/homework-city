$(document).ready(function(){
//grab a reference to the input value
	var input = $('#city-type');
	//grab a reference to the click event
	var submit = $('#submit-btn');

	//listen for the click event on the submit button
	$(submit).click(changeThePhoto);

	function changeThePhoto(event){
		console.log(event);	//check the value of the input
		event.preventDefault();

		var city = $(input).val(); //converts the user input to string value
		city = city.toLowerCase().trim(); //converts all answers to lower case & trims white space

		//update picture for appropriate city
		if (city === 'san francisco' || city === 'sf' || city === 'bay area') {
			$('body').removeClass().removeProp('background').addClass('sf');
		} else if (city === 'new york' || city === 'new york city' || city === 'nyc') {
			$('body').removeClass().removeProp('background').addClass('nyc');
		} else if (city === 'los angeles' || city === 'la' || city === 'lax') {
			$('body').removeClass().removeProp('background').addClass('la');
		} else if (city === 'austin' || city === 'atx') {
			$('body').removeClass().removeProp('background').addClass('austin');
		} else if (city === 'sydney' || city === 'syd') {
			$('body').removeClass().removeProp('background').addClass('sydney');
		} else {
			$('body').removeClass(); //reset to default background if invalid input
		}
	}	
});