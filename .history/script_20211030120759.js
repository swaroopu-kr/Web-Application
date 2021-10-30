    // Constants
    BASE_URL = 'https://randomuser.me/api/?inc=gender,name,location,email,login,DOB,phone,picture';

    // State Variables

    let apiData;
  
    // Cached Element References
    const $input = $('input[type="text"]')
    const $main = $('main');
    const $form = $('form');
  
// Event Listeners

$main.on('click', 'article', handleClick);

getData();


function getData () {
$.ajax(BASE_URL)
.then(function(data){
apiData = data;
render();
}, function(error) {

});
} //close function

function handleClick () {
$(this).children().toggleClass('hidden');
}


function render (){
const userData = api.map(function(){
return`




// <p>Weather For: ${weatherData.name}</p>
// <p>Temperature: ${weatherData.main.temp}&#176;</p>
// <p>Feels Like: ${weatherData.main.feels_like}&#176;</p>
// <p>Weather: ${weatherData.weather[0].description}</p>`

}).join(''); 

$main.html('<section>${user}</section>');

}



   
/*  
  
};




    // add data as text content to our DOM elements
    function render () {
      $main.html(
        // create p tags with weatherData values interpolated within them
        `
     
     
     
     
        `
      )
    }
  
   //})
  

  */