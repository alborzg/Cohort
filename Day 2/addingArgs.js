 
var total = 0;

function addArgs() {

  for (var i = 0; i < arguments.length; i++) {

    if(isNaN(arguments[i]))
      continue;
    else
      total += arguments[i];
  }
  
  console.log(total);
}

addArgs(1,2,3);