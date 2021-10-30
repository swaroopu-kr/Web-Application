//IIFE FUNCTION
//$(function () {





    // Constants
    BASE_URL = 'https://randomuser.me/api/?inc=gender,name,location,email,login,DOB,phone,picture';

    // State Variables

    let apiData;
  
    // Cached Element References
    const $input = $('input[type="text"]')
    const $main = $('main');
    const $form = $('form');
  
//
  
    // vars 
    let user;
  
    // Event Listener
    $form.on('submit', handleSubmit);
  
    // Functions
  
    function handleSubmit(evt) {
      evt.preventDefault();
      const currCity = $input.val();
      console.log(currCity)
        $.ajax({BASE_URL}
  success: function(data) {
    console.log(data);
  })
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
  


  