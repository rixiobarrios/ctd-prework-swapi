let baseUrl = 'https://swapi.dev/api/people/1/';

fetch(baseUrl)
    .then((response) => response.json())
    .then((json) => console.log(json));
person.innerHtml = `<h1>${json.name}</h1>`;

let button = document.querySelector('#button');

function youClickedMe() {
    console.log('You clicked me');
}

button.addEventListener('click', youClickedMe);
