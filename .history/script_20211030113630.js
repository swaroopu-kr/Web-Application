//IIFE FUNCTION
//$(function () {


//https://randomuser.me/api/?inc=gender,name,location, email, login, D


    // Constants
    // BASE_URL = https://random.dog/woof.json;
    // API_KEY = '';
  
    // Cached Element References
    const $input = $('input[type="text"]')
    const $main = $('main');
    const $form = $('form')
  
  
    // vars 
    let weatherData;
  
    // Event Listener
    $form.on('submit', handleSubmit);
  
    // Functions
  
    function handleSubmit(evt) {
      evt.preventDefault();
      const currCity = $input.val();
      console.log(currCity)
        $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }})
};
        




    // add data as text content to our DOM elements
    function render () {
      $main.html(
        // create p tags with weatherData values interpolated within them
        `
        <p>Weather For: ${weatherData.name}</p>
        <p>Temperature: ${weatherData.main.temp}&#176;</p>
        <p>Feels Like: ${weatherData.main.feels_like}&#176;</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
        `
      )
    }
  
   //})
  


  