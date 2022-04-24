let charactersUrl = `https://swapi.dev/api/people/`;
let filmsUrl = `https://swapi.dev/api/films/`;
let people = document.getElementById('people');
let films = document.getElementById('film');

fetch(charactersUrl)
    .then((response) => response.json())
    .then((res) => {
        // console.log(res.results);
        res.results.map((data) => {
            // console.log(data);
            const node = document.createElement('div');
            const textNode = document.createTextNode(data.name);
            node.appendChild(textNode);
            node.addEventListener('click', function () {
                characterDetails(data.url);
            });
            if (people) {
                people.appendChild(node); //TypeError here
            }
        });
    });

function characterDetails(url) {
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            // console.log(result);
            const nameNode = document.createElement('h2');
            const nameText = document.createTextNode(result.name);
            nameNode.appendChild(nameText);
            const heightNode = document.createElement('div');
            const heightText = document.createTextNode(
                'height: ' + result.height
            );
            heightNode.appendChild(heightText);
            const massNode = document.createElement('div');
            const massText = document.createTextNode(result.mass);
            massNode.appendChild(massText);
            const hairNode = document.createElement('div');
            const hairText = document.createTextNode(result.hair_color);
            hairNode.appendChild(hairText);
            const skinNode = document.createElement('div');
            const skinText = document.createTextNode(result.skin_color);
            skinNode.appendChild(skinText);
            const eyeNode = document.createElement('div');
            const eyeText = document.createTextNode(result.eye_color);
            eyeNode.appendChild(eyeText);
            while (people.firstChild) {
                people.removeChild(people.firstChild);
            }
            people.appendChild(nameNode);
            people.appendChild(heightNode);
            people.appendChild(massNode);
            people.appendChild(hairNode);
            people.appendChild(skinNode);
            people.appendChild(eyeNode);
        });
}

fetch(filmsUrl)
    .then((response) => response.json())
    .then((res) => {
        // console.log(res.results);
        res.results.map((film) => {
            // console.log(film.url);
            const node = document.createElement('div');
            const textNode = document.createTextNode(film.title);
            node.appendChild(textNode);
            node.addEventListener('click', function () {
                filmDetails(film.url);
            });
            if (films) {
                films.appendChild(node);
            }
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
            const crawlNode = document.createElement('p');
            const crawlText = document.createTextNode(result.opening_crawl);
            crawlNode.appendChild(crawlText);
            const charsNode = document.createElement('div');
            result.characters.map((character) => {
                // characterDetails(character);
                fetch(character)
                    .then((res) => res.json())
                    .then((res) => {
                        // console.log(res);
                        const charNode = document.createElement('div');
                        const charText = document.createTextNode(res.name);
                        charNode.appendChild(charText);
                        charsNode.appendChild(charNode);
                    });
            });
            // const charsText = document.createTextNode(result.characters);
            // charNode.appendChild(charsText);
            while (films.firstChild) {
                films.removeChild(films.firstChild);
            }
            films.appendChild(titleNode);
            films.appendChild(crawlNode);
            films.appendChild(charsNode);
        });
}

function callCharacter(url) {
    fetch(url).then((res) => res.json());
}
