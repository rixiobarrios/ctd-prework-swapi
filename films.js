//URL variables
let filmsUrl = `https://swapi.dev/api/films/`;

//targets on the HTML document
let films = document.getElementById('film');

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
            //remove previous rendering
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
