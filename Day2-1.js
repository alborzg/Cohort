var startPrompt = 'How about a starting number?';
var endPrompt = 'And an ending number?';
var notAnum = 'That is not a number, please enter a number.';

start = prompt(startPrompt);
start = parseInt(start);
  
   while(isNaN(start)) {
     start = prompt(notAnum);
     console.log(start);
     start = parseInt(start);
   }
   
end = prompt(endPrompt);
end = parseInt(end);
  
  while(isNaN(end)) {
     end = prompt(notAnum);
     console.log(end);
     start = parseInt(end);
   }

while(end < start) {
start = prompt(startPrompt);
console.log(start);
start = parseInt(start);
  
   while(isNaN(start)) {
     start = prompt(notAnum);
     console.log(start);
     start = parseInt(start);
   }
       
end = prompt(endPrompt);
console.log(end);
end = parseInt(end);
  
  while(isNaN(end)) {
     end = prompt(notAnum);
     console.log(end);
     start = parseInt(end);
   }
  
}
  

for (var i = start; i < end; i++){
  if(i%2 === 0)
    console.log(i + " even");
  else
    console.log(i + " odd");
}