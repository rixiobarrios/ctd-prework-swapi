let charactersUrl = `https://swapi.dev/api/people/1/`;
let filmsUrl = `https://swapi.dev/api/films/1/`;
let character = document.getElementById('character');
let film = document.getElementById('film');

fetch(charactersUrl)
    .then((response) => response.json())
    .then((json) => {
        console.log(json.name);
        character.innerHTML = `<h1>${json.name}</h1>`;
    });

fetch(filmsUrl)
    .then((response) => response.json())
    .then((json) => {
        console.log(json.title);
        film.innerHTML = `<h1>${json.title}</h1>`;
    });
