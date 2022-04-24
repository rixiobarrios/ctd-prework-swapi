//URL variables
let charactersUrl = `https://swapi.dev/api/people/`;
let filmsUrl = `https://swapi.dev/api/films/`;
//targets on the HTML document
let people = document.getElementById('people');
let films = document.getElementById('film');

//fetch characters in default GET mode
fetch(charactersUrl)
    .then((response) => response.json())
    .then((res) => {
        //iterate through characters
        res.results.map((data) => {
            //render name
            const node = document.createElement('div');
            const textNode = document.createTextNode(data.name);
            node.appendChild(textNode);
            //character name links to its details
            node.addEventListener('click', function () {
                characterDetails(data.url);
            });
            //condition avoids TypeError
            if (people) {
                people.appendChild(node);
            }
        });
    });
//fetch character details
function characterDetails(url) {
    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            // console.log(result);
            const nameNode = document.createElement('h2');
            const nameText = document.createTextNode(result.name);
            nameNode.appendChild(nameText);
            const filmsNode = document.createElement('div');
            //iterate through characters in the film
            result.films.map((film) => {
                fetch(film)
                    .then((res) => res.json())
                    .then((res) => {
                        //render name in a span tag
                        const filmNode = document.createElement('span');
                        const filmText = document.createTextNode(
                            res.title + ', '
                        );
                        filmNode.appendChild(filmText);
                        filmsNode.appendChild(filmNode);
                    });
            });
            //remove previous rendering
            while (people.firstChild) {
                people.removeChild(people.firstChild);
            }
            //items render to HTML
            people.appendChild(nameNode);
            people.appendChild(filmsNode);
        });
}
//function to parse films url into titles
function callFilms(url) {
    fetch(url).then((res) => res.json());
}

fetch(filmsUrl)
    .then((response) => response.json())
    .then((res) => {
        //iterate through films
        res.results.map((film) => {
            //render title
            const node = document.createElement('div');
            const textNode = document.createTextNode(film.title);
            node.appendChild(textNode);
            node.addEventListener('click', function () {
                filmDetails(film.url);
            });
            //condition avoids TypeError
            if (films) {
                films.appendChild(node);
            }
        });
    });

function filmDetails(url) {
    fetch(url)
        .then((res) => res.json())
        .then((result) => {
            //film details rendering
            const titleNode = document.createElement('h2');
            const titleText = document.createTextNode(result.title);
            titleNode.appendChild(titleText);
            const crawlNode = document.createElement('p');
            const crawlText = document.createTextNode(result.opening_crawl);
            crawlNode.appendChild(crawlText);
            const charsNode = document.createElement('div');
            //iterate through characters in the film
            result.characters.map((character) => {
                fetch(character)
                    .then((res) => res.json())
                    .then((res) => {
                        //render name in a span tag
                        const charNode = document.createElement('span');
                        const charText = document.createTextNode(
                            res.name + ', '
                        );
                        charNode.appendChild(charText);
                        charsNode.appendChild(charNode);
                    });
            });
            while (films.firstChild) {
                films.removeChild(films.firstChild);
            }
            films.appendChild(titleNode);
            films.appendChild(crawlNode);
            films.appendChild(charsNode);
        });
}
//function to parse character url into name
function callCharacter(url) {
    fetch(url).then((res) => res.json());
}
