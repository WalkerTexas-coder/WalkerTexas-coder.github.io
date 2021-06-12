// set integer for treasure 
var treasureLocation = Math.floor(Math.random() * 16)
// set  2 integers for trap taht are not overlapping with treasure or each other

var trap1Location = Math.floor(Math.random() * 16);
var trap2Location = Math.floor(Math.random() * 16);
var trap3Location = Math.floor(Math.random() * 16);


if (trap1Location === treasureLocation){
    trap1Location = Math.floor(Math.random() * 16);
}
if (trap2Location === treasureLocation || trap2Location === trap1Location){
    trap2Location = Math.floor(Math.random() * 16);
}
if (
  trap3Location === treasureLocation ||
  trap3Location === trap1Location ||
  trap3Location === trap2Location
) {
    trap3Location = Math.floor(Math.random() * 16);
}
 const treasure = (location) => {
     if (treasureLocation === location){
         alert ("YOU WIN! YOU FOUND THE TREASURE")
     }
     else if(location === trap1Location){
         alert ("You fell in a trap")
     }
     else if(location === trap2Location){
         alert (" you got caught in a net trap")
     }
     else if (location === trap3Location) {
         alert("There was a cave in! You're Trapped")
     }
     else{
         document.getElementById(location).innerHTML = "✘";
     }
 }