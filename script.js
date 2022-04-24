let charactersUrl = `https://swapi.dev/api/people/`;
let filmsUrl = `https://swapi.dev/api/films/`;
let characters = document.getElementById('character');
let films = document.getElementById('film');

fetch(charactersUrl)
    .then((response) => response.json())
    .then((res) => {
        // console.log(res.results);
        res.results.map((char) => {
            // console.log(char.name);
            const node = document.createElement('div');
            const textnode = document.createTextNode(char.name);
            node.appendChild(textnode);
            node.addEventListener('click', function () {
                characterDetails(char.name);
            });
            characters.appendChild(node);
        });
    });

function characterDetails(url) {
    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            const nameNode = document.createElement('h2');
            const nameText = document.createTextNode(result.name);
            nameNode.appendChild(nameText);
            const massNode = document.createElement('div');
            const massText = document.createTextNode(result.mass);
            nameNode.appendChild(nameText);
            while (characters.firstChild) {
                characters.removeChild(characters.firstChild);
            }
            characters.appendChild(nameNode);
            characters.appendChild(massNode);
        });
}

fetch(filmsUrl)
    .then((response) => response.json())
    .then((res) => {
        // console.log(res.results);
        res.results.map((film) => {
            // console.log(film.url);
            const node = document.createElement('div');
            const textnode = document.createTextNode(film.title);
            node.appendChild(textnode);
            node.addEventListener('click', function () {
                filmDetails(film.url);
            });
            films.appendChild(node);
        });
    });

function filmDetails(url) {
    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            // console.log(result);
            const titleNode = document.createElement('h2');
            const titleText = document.createTextNode(result.title);
            titleNode.appendChild(titleText);
            const crawlNode = document.createElement('div');
            const crawlText = document.createTextNode(result.opening_crawl);
            crawlNode.appendChild(crawlText);
            while (films.firstChild) {
                films.removeChild(films.firstChild);
            }
            films.appendChild(titleNode);
            films.appendChild(crawlNode);
        });
}
