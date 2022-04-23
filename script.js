let baseUrl = 'https://swapi.dev/api/people/1/';
let person = document.getElementById('app');

fetch(baseUrl)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        person.innerHTML = `<h1>${json.name}</h1>`;
    });

let button = document.querySelector('#button');

function youClickedMe() {
    console.log('You clicked me');
}

button.addEventListener('click', youClickedMe);
