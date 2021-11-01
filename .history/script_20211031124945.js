//     // Constants  
//     BASE_URL = 'https://randomuser.me/api/?inc=';
//     API_KEY ="gender,name,location,email,login,DOB,phone"
//     // State Variables

//     let apiData;
  
//     // Cached Element References
//     const $main = $('main');
//     const $form = $('form')
// // Event Listeners

// $main.on('click', 'article', handleClick);
// $form.on('submit', handleSubmit);


// getData();



// function getData () {
// $.ajax(BASE_URL)
// .then(function(data){
// apiData = data;
// render();
// }, function(error) {

// });
// } //close function

// function handleClick () {
// $(this).children().toggleClass('hidden');
// }


// function render (){
// const userData = apiData.map(function(){
// return`

// <article style="background-image: url(${photoObject.url})">
// <h3>${photoObject.title}</h3>
// <p class="hidden">${photoObject.explanation}</p>
// </article>`;


// // <p>Weather For: ${weatherData.name}</p>
// // <p>Temperature: ${weatherData.main.temp}&#176;</p>
// // <p>Feels Like: ${weatherData.main.feels_like}&#176;</p>
// // <p>Weather: ${weatherData.weather[0].description}</p>

// }).join(''); 

// $main.html('<section>${userData}</section>');

// }


// //weather lab code

// // Functions
// function handleSubmit(evt) {
//   evt.preventDefault();
//   const gen = $input.val();
//   console.log(gen)
//     $.ajax(`${BASE_URL}${gen}`)
//     .then(function(data) {
//       apiData = data
//     render();
//   }, function (error){
//     console.log("error:", error)
//   })
// }



// function render () {
//   $main.html(
//     // create p tags with weatherData values interpolated within them
//     `
//     <p>Weather For: ${weatherData.name}</p>
//     <p>Temperature: ${weatherData.main.temp}&#176;</p>
//     <p>Feels Like: ${weatherData.main.feels_like}&#176;</p>
//     <p>Weather: ${weatherData.weather[0].description}</p>
//     `
//   )
//   }









  //IIFE FUNCTION
  
    // Constants
    //BASE_URL = 'https://randomuser.me/api/'
    //API_KEY = 'gender,name,location,email,login,DOB,phone';
  
    // Cached Element References
    //const $input = $('input[type="text"]')
    const $main = $('#main');
    const $form = $('form');
    const $input = ('input');
    let user;
  
    // Event Listener
    $form.on('submit', handleSubmit);
  
    // Functions
  
  
  
  
  function handleSubmit(evt) {
      evt.preventDefault(); 

    $.ajax(`https://randomuser.me/api/?inc=gender,name,dob,phone,email,picture`).then(function (data) {
              // success callback function
              //console.log('promise fulfilled');
              //console.log(data);
  console.log(data)
              user= data;
              render();
  
              // add data as text content to our DOM elements
  
  
  
          }, function (error) {
              // failure callback function
              console.log('promise failed');
              console.log(error);
          });
  }
  
  
  function render() {
      $gender.text(user.Gender);
  }
  
  
  function render () {
    $main.html(
  `
  <p> Hellow ${user.results.gender}</p>
  
  `
    )
  }
  
  
  // function render() {
  //   
  
  
  //     function showData(first, last, large, street, phone, email) {
  //   document.getElementById("first").textContent = first;
  //   document.getElementById("last").textContent = last;
  //   document.getElementById("street").textContent = street;
  //   document.getElementById("phone").textContent = phone;
  //   document.getElementById("email").textContent = email;
  //   document.getElementById("photo").src = large;
  // }
  // }
  
  // const {
  //     name: { first },
  //     name: { last },
  //     picture: { large },
  //     location: { street },
  //     phone,
  //     email
  //   } = data.results[0]
  
  
  
  function getData(response, callback) {
    const data = JSON.parse(response);
  
    //using destructuring to pull the data from the response
    const {
      name: { first },
      name: { last },
      picture: { large },
      location: { street },
      phone,
      email
    } = data.results[0];
  
  function user(first, last, large, street, phone, email) {
    document.getElementById("gender").textContent = first;
    document.getElementById("last").textContent = last;
    document.getElementById("street").textContent = street;
    document.getElementById("phone").textContent = phone;
    document.getElementById("email").textContent = email;
    document.getElementById("photo").src = large;
  }
  }
  
  
  
  
  
