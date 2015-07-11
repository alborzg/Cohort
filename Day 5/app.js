//create a function that will take a title, runningTime and year
//as arguments and return an object of those properties.
function movieObjCreator(title, runningTime, year) {
    return {
        title: title,
        runningTime: runningTime,
        year: year
    };
}

//Our data structure, an array of arrays
var movies = [
    ["bill and teds excellent adventure", 90, 1990],
    ["rad", 85, 1983],
    ["goonies", 95, 1985],
    ["top gun", 90, 1987],
    ["the shawshank redemption", 120, 2005]
];

//for holding our new movie objects
var movieObjs = [];

//initial loop, we'll create our movie objects here
for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    movieObjs.push(movieObjCreator.apply({}, movie));
}

function e(elementType, text, attributes, styles) {
    attributes = attributes || {};
    styles = styles || {};

    var newElement = document.createElement(elementType);

    if (text) {
        newElement.textContent = text;
    }

    //set the attributes on the tag
    for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            newElement.setAttribute(attr, attributes[attr]);
        }
    }

    //set the styles
    for (var style in styles) {
        if (styles.hasOwnProperty(style)) {
            newElement.style[style] = styles[style];
        }
    }

    return newElement;
}

//create the main ul
var ul = e("ul");

//loop our movie array and create one li for each movie,
//with the title as the text
for (var i = 0; i < movieObjs.length; i++) {
    var movie = movieObjs[i];
    var li = e("li", movie.title, {}, {color: "red"});

    li.addEventListener("click", function () {
        alert(this.textContent);
        console.log(this); //what is the context to our callback function?
    });

    ul.appendChild(li);
}

document.body.appendChild(ul);


var button = document.getElementById("alert");

button.addEventListener("click", function () {
    alert(this.textContent);
    console.log(this); //what is the context to our callback function?
});