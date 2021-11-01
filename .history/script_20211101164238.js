


BASE_URL = 'https://randomuser.me/api/?results=3';

const $main = $('main');


let btn = document.getElementById('btn');

btn.addEventListener("click", function () {
  fetch(BASE_URL)
    .then(parseJSON)
    .then(newUser)
});

function parseJSON(seperate) {
  return seperate.json();
}

//array info below. 

function newUser(profile) {
  $main.html(`
      
  <div class="flex-grid">
  <div class="grid-item">


  <img src="${profile.results[0].picture.medium}">
  <p>Name: ${profile.results[0].name.first + " " + profile.results[0].name.last}</p>

  <p>Sex: ${profile.results[0].gender}</p>
  <p>Age: ${profile.results[0].dob.age}</p>
  <p>User Name: ${profile.results[0].login.username}</p>
  <p>Email: ${profile.results[0].email}</p>
  <p>Location: ${ profile.results[0].location.city + " " + profile.results[0].location.state}</p>
  <p>Phone: ${ profile.results[0].cell}</p>


  </div>
  

<br>
<br>
<img src="${profile.results[1].picture.medium}">
  <p>Name: ${profile.results[1].name.first + " " + profile.results[1].name.last}</p>
  <p>Sex: ${profile.results[1].gender}</p>
  <p>Age: ${profile.results[1].dob.age}</p>
  <p>User Name: ${profile.results[1].login.username}</p>
  <p>Email: ${profile.results[1].email}</p>
  <p>Location: ${ profile.results[1].location.city + " " + profile.results[1].location.state}</p>
  <p>Phone: ${ profile.results[1].cell}</p>

<br>
<br>

<img src="${profile.results[2].picture.medium}">
  <p>Name: ${profile.results[2].name.first + " " + profile.results[2].name.last}</p>
  <p>Sex: ${profile.results[2].gender}</p>
  <p>Age: ${profile.results[2].dob.age}</p>
  <p>User Name: ${profile.results[2].login.username}</p>
  <p>Email: ${profile.results[2].email}</p>
  <p>Location: ${ profile.results[2].location.city + " " + profile.results[2].location.state}</p>
  <p>Phone: ${ profile.results[2].cell}</p>
  
`);

  return;
}







