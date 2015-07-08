var Movies = ['the shawshank redemption', 'the godfather', 'the godfather: part II', 'the dark knight', 'pulp fiction', 'schindler\'s list', '12 angry men', 'the good the bad and the ugly', 'the lord of the rings: the return of the king', 'fight club'];

// Capitalize first letter of word
function Capitalize(str) {
 	var first = str[0];

 	if(isNaN(first))
 		 return first.toUpperCase() + str.slice(1);
 	else 
 	  return str;
}

// Split the movie array, call Capitalize, and join
for(var i = 0; i < Movies.length; i++) {
  var movie = Movies[i];
  var moviePieces = movie.split(" ");
  //console.log(moviePieces);
  
  for(var j = 0; j < moviePieces.length; j++)
    moviePieces[j] = Capitalize(moviePieces[j]);
    
  console.log(moviePieces.join(" "));

}
