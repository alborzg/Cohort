
function Movie(title, time, year, desc, genre) {
    this.movieTitle = title || 'No Title Provided';
    this.runTime = time || 'No Time Provided';
    this.releaseDate = year || 'No Year Provided';
    this.movieGenre = genre || 'No Genre Provided';
    this.movieDescription = desc || 'No Description Provided';
}

Movie.prototype = {
    runningTimeHours: function runningTimeHours() {
        var time = (this.runTime / 60).toFixed(2);
        return(time);
    },
    preview: function preview() {
        return(this.movieDescription.slice(0,50) + "...");
    }
    //conTime: function conTime(){
    //    this.runTime = this.runTime / 60;
    //    console.log(this.runTime);
    //}
};

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

builder('h2', 'This is a list of movies', {id: 'movie header', class:'col-8-md' }, {textAlign: 'center'}, 'body');
builder('ul', null, {id: 'list' }, {textAlign: 'center'}, 'body');

var form = document.getElementById("newMovieForm");

form.addEventListener("submit", function (evt) {
    var movie = document.getElementById("movieTitle").value;
    var time = document.getElementById("runTime").value;
    var year = document.getElementById("yearRelease").value;
    var desc = document.getElementById("description").value;
    //alert(movie);
    //alert(time);
    //alert(year);
    //alert(desc);

    var genreInputs = document.getElementsByName("genre");

    var genre;

    for (var i = 0; i < genreInputs.length; i++) {
        var genreInput = genreInputs[i];
        if (genreInput.checked) {
            genre = genreInput.value;
            //alert(genre);
        }
    }
    var movieInstance = new Movie(movie, time, year, desc, genre);
    submission = builder('li', movieInstance.movieTitle, {rel: movieInstance.preview(), class: movieInstance.runningTimeHours()}, {listStyleType: 'none'}, null);

    submission.addEventListener('click', function(){
        alert(this.getAttribute('rel') + " Run Time: " + this.getAttribute('class') + " hrs");
    });

    var sticky = document.getElementById('list');
    sticky.appendChild(submission);

    document.getElementById("newMovieForm").reset();

    //console.log(movieInstance);
    //console.log(movieInstance.movieTitle);
    //console.log(movieInstance.runTime);
    //movieInstance.runningTimeHours();

    evt.preventDefault();

});

