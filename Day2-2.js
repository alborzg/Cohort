var SIZE = 500;
var Array = [];

for (var i = 1; i <= SIZE; i ++)
   Array[i - 1] = i;

console.log(Array);
  
for(var i = Array.length; i > 0; i--) {
  console.log(Array);
  Array.pop();
  
}


