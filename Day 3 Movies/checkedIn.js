
var movies = [['the shawshank redemption', 142 , 1994 ], ['the godfather', 175, 1972], ['the godfather: part II', 200, 1974], ['the dark knight', 152 , 2008], ['pulp fiction', 154, 1994], ['schindler\'s list', 195, 1993], ['12 angry men', 96, 1957], ['the good the bad and the ugly', 161, 1966], ['the lord of the rings: the return of the king', 201, 2003], ['fight club', 139, 1999]];

function Movie(title, time, year) {
    this.title = title;
    this.time = time;
    this.year = year;
    this.checkedIn = true;
}

Movie.prototype = {
    checkIn: function checkIn() {
        this.checkedIn = true;
    },
    checkOut: function checkOut() {
        this.checkedIn = false;
    },
    status: function status() {
        if (this.checkedIn === true)
            console.log("is checked in.");
        else
            console.log("is checked out.");
    }

};

// Array of arrays => array of objects
for(var i = 0; i < movies.length; i++) {
    var movie =  movies[i];
    movies[i] = new Movie(movie[0], movie[1], movie[2]);
    // console.log(movies);
}
// Flag
var movieFound = false;

// User input
var name = prompt('Enter a movie title').toLowerCase();

// Iterate through array, check if title matches
// Left out loop to test functionality
for (var j = 0; j < movies.length; j ++) {
    var movie = movies[j];

    if (name == movie.title.toLowerCase() && movie.checkedIn){
        console.log(movie.title);
        movie.status();

        movie.checkOut();

        console.log(movie.title);
        movie.status();

        movieFound = true;


        break;
    }
    if (name == movie.title.toLowerCase() && !movie.checkedIn) {
        console.log(movie.title);
        movie.status();

        movie.checkIn();

        console.log(movie.title);
        movie.status();

        movieFound = true;

        break;
    }

}
// In case of no match
if (!movieFound){
    console.log("Movie not found.");
}