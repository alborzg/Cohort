/*
 Alter your original movies array, to be an array of arrays, where each array contains the title, running time, and year released

 Create a function that will accept three arguments - movie title, running time (in minutes), and year released.
 The function should take those arguments and return an object that has title, runningTime and year as keys.

 Loop over your movie array, and use the apply function to call your function, passing to it the current movie array you are on
 Stick the new object that your function returns into a new array
 Loop the new array and log the movie title, runningTime and year to the console.
*/

var bigArray = [['Something', 'sometime', 'some year'], ['Something else', 'Some other time', 'some other year']];

var objArray = [];

var movieSpecs = {
    title: undefined,
    time: undefined,
    year: undefined,

    movieBuilder: function MovieBuilder(title, time, year){
        var movie = this;

        movie.title = title;
        movie.time  = time;
        movie.year = year;

        console.log(this);

        objArray.push(this);

    }
};

for(var i = 0; i < bigArray.length; i++) {
    var littleArray = bigArray[i];

    var title = littleArray[0];
    var time = littleArray[1];
    var year = littleArray[2];

    movieSpecs.movieBuilder.apply({}, [title, time, year]);

}

console.log(objArray);

function find(){
    var input = prompt("Enter a movie title.");
    for(var i = 0; i < objArray.length; i++) {
        if (objArray[i].title === input)
            console.log(objArray[i].year);
    }
}

find();