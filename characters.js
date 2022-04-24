//URL variables
let charactersUrl = `https://swapi.dev/api/people/`;

//targets on the HTML document
let people = document.getElementById('people');

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
