var movies = [['the shawshank redemption', 142 , 1994 ], ['the godfather', 175, 1972], ['the godfather: part II', 200, 1974], ['the dark knight', 152 , 2008], ['pulp fiction', 154, 1994], ['schindler\'s list', 195, 1993], ['12 angry men', 96, 1957], ['the good the bad and the ugly', 161, 1966], ['the lord of the rings: the return of the king', 201, 2003], ['fight club', 139, 1999]];

function builder(elementType, text, attributes, styles, selector) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

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

    //select attribute and append
    var container = document.querySelector(selector);

    if(container) {
        container.appendChild(newElement);
    }

    return newElement;
}

builder('h2', 'This is a list', {id: 'dates'}, null, 'body');
builder('h2', 'Here\'s another list', {}, null, 'body');
builder('ul', null, {id: 'movies' }, null, 'body');



for(var i =0; i<movies.length; i++) {
    movie = movies[i];

    var info = movie[0] + ', run time: ' + movie [1] + ', released: ' + movie[2];

    builder('li', info, null, null, '#movies');

}

for(var i =0; i<movies.length; i++) {
    movie = movies[i];

    var info = movie[2];

    builder('a', null, {href:'', class: 'bydate'}, null, '#dates');
    builder('li', info, null, null, '.bydate');

}
