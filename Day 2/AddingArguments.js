var total = 0;

function addArgs() {

  for (var i = 0; i < arguments.length; i++) {
     var arg = parseInt(arguments[i]);
    
    if(isNaN(arg))
      continue;
    else
      total += arg;
  }
  
  console.log(total);
}

addArgs(1,2,"a", 3, "");