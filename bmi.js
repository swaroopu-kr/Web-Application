// //IIFE FUNCTION
// $(function () {

//     // Constants
//     BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
//     API_KEY = 'c766f08b64c511e7c386ea68613046ac';
  
//     // Cached Element References
//     const $input = $('input[type="text"]')
//     const $main = $('main');
//     const $form = $('form')
  
  
//     // vars 
//     let weatherData;
  
//     // Event Listener
//     $form.on('submit', handleSubmit);
  
//     // Functions
  
    function handleSubmit(evt) {
      evt.preventDefault();
      const currCity = $input.val();
      console.log(currCity)
        $.ajax(`${BASE_URL}${currCity}&appid=${API_KEY}&units=imperial`)
        .then(function(data) {
          weatherData = data
        render();
      }, function (error){
        console.log("error:", error)
      })
  }
        
//     // add data as text content to our DOM elements
//     function render () {
//       $main.html(
//         // create p tags with weatherData values interpolated within them
//         `
//         <p>Weather For: ${weatherData.name}</p>
//         <p>Temperature: ${weatherData.main.temp}&#176;</p>
//         <p>Feels Like: ${weatherData.main.feels_like}&#176;</p>
//         <p>Weather: ${weatherData.weather[0].description}</p>
//         `
//       )
//     }
  
//    })
  




  const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=150&height=68",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "body-mass-index-bmi-calculator.p.rapidapi.com",
		"x-rapidapi-key": "ad21e3c518mshebdbf5e24e9342bp18e638jsn1c131112820f"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});