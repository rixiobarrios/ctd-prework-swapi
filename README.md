![CTD_Logo1](https://user-images.githubusercontent.com/55994508/163671705-1ac3ca46-1f1c-4474-b26b-007ebb019f4d.jpg)

# Overview

This basic page was created as part of the pre-work requirement in order to be considered for the advance classes at [Code The Dream](https://codethedream.org/) found [here](https://codethedream.org/pre-work-for-advanced-classes/).

# Requirements

1. Creating the HTML for the page
2. Styling the elements on the page using CSS
3. Retrieving the data to display on the page using JavaScript to fetch the data from the Star Wars API as needed
4. Providing a README file that includes the instructions for running the webpage
5. Display the data for at least 2 of the models in the API (we suggest starting with people and films)
6. Provide a way for the user to navigate from each model’s page to the other models that are displayed
7. The simplest version of this would allow going from a person to the films they are in and from a film to the characters in that film
8. Issue new GET requests for the linked data to display in the linked pages
9. The project should be created as a repository in GitHub and a link to the repository should be submitted for assessment in the assessment form.

**Areas that will be included in the assessment include:**

- Can we get the code to run without issues by following the instructions in the README file
- Is the site usable to navigate between the different models it loads
- Is the code readable and well structured
- Does it handle error cases
- What type of styling was included
- While we do expect to see some custom styling on the site - this is primarily an assessment of coding skills and not design strength so a simple set of styling is acceptable.

**Extra**

The following are not necessary, but are examples of things that would be nice bonuses:

- A particularly well-designed GUI
- Display and navigation of more than 2 categories of data from the api
- Displaying all of the data associated with each model

# The Project

![starwarscall](https://user-images.githubusercontent.com/55994508/163671473-5f1cda65-9dc3-46df-be6e-37b33d6752eb.jpg)

1. The project uses HTML, CSS and Javascript.

2. The styling is done in CSS.

3. The data for this project was fetched from a free Star Wars API found at [swapi.dev](https://swapi.dev/) as required.
Example request:

`http https://swapi.dev/api/people/1/`

Example response:

```HTTP/1.0 200 OK
Content-Type: application/json
{
    "birth_year": "19 BBY",
    "eye_color": "Blue",
    "films": [
        "https://swapi.dev/api/films/1/",
        ...
    ],
    "gender": "Male",
    "hair_color": "Blond",
    "height": "172",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "mass": "77",
    "name": "Luke Skywalker",
    "skin_color": "Fair",
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-10T13:52:43.172000Z",
    "species": [
        "https://swapi.dev/api/species/1/"
    ],
    "starships": [
        "https://swapi.dev/api/starships/12/",
        ...
    ],
    "url": "https://swapi.dev/api/people/1/",
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/"
        ...
    ]
}
```

4. How to download and run this project:
- You can either clone the repository from the github or downlad the zip.
- clone link and download option can be found from right side of the repository  page
- Unzip the file and open the project on your terminal by navigating to the folder

5. Data for people and films are displayed

6. Two links provide access to both models

7. Pending

8. Two get requests are built for both data models

9. Repository has been created [here](https://github.com/rixiobarrios/ctd-swapi)


