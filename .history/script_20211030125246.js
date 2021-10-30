    // Constants  
    BASE_URL = 'https://randomuser.me/api/?inc=';
    API_KEY =" <form style="margin-top: 50px;">
    <label>
      <input type="text" placeholder="City">
    </label>
  <input type="submit" value="Get Weather">"
    // State Variables

    let apiData;
  
    // Cached Element References
    const $main = $('main');
    const $form = $('form')
// Event Listeners

$main.on('click', 'article', handleClick);
$form.on('submit', handleSubmit);


getData();

  
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
const userData = apiData.map(function(){
return`

<article style="background-image: url(${photoObject.url})">
<h3>${photoObject.title}</h3>
<p class="hidden">${photoObject.explanation}</p>
</article>`;


// <p>Weather For: ${weatherData.name}</p>
// <p>Temperature: ${weatherData.main.temp}&#176;</p>
// <p>Feels Like: ${weatherData.main.feels_like}&#176;</p>
// <p>Weather: ${weatherData.weather[0].description}</p>

}).join(''); 

$main.html('<section>${userData}</section>');

}


//weather lab code

// Functions
function handleSubmit(evt) {
  evt.preventDefault();
  const gen = $input.val();
  console.log(gen)
    $.ajax(`${BASE_URL}${gen}`)
    .then(function(data) {
      apiData = data
    render();
  }, function (error){
    console.log("error:", error)
  })
}



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