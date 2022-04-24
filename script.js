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
            const textNode = document.createTextNode(char.name);
            node.appendChild(textNode);
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
            // const heightNode = document.createElement('div');
            // const heightText = document.createTextNode(result.height);
            // heightNode.appendChild(heightText);
            // const massNode = document.createElement('div');
            // const massText = document.createTextNode(result.mass);
            // massNode.appendChild(massText);
            // const hairNode = document.createElement('div');
            // const hairText = document.createTextNode(result.hair_color);
            // hairNode.appendChild(hairText);
            // const skinNode = document.createElement('div');
            // const skinText = document.createTextNode(result.skin_color);
            // skinNode.appendChild(skinText);
            // const eyeNode = document.createElement('div');
            // const eyeText = document.createTextNode(result.eye_color);
            // eyeNode.appendChild(eyeText);
            while (characters.firstChild) {
                characters.removeChild(characters.firstChild);
            }
            characters.appendChild(nameNode);
            // characters.appendChild(heightNode);
            // characters.appendChild(massNode);
            // characters.appendChild(hairNode);
            // characters.appendChild(skinNode);
            // characters.appendChild(eyeNode);
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
