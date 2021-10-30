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
  
// Event Listeners

$main.on('click', 'article', handleClick);

getData();


function getData () {
$ajax.(BASE_URL)
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
const userData = api.map(function(){}
return`

}).join(''); 
$main.html('<section>${user}</section>');
  
}


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
     
     
     
     
        `
      )
    }
  
   //})
  


  