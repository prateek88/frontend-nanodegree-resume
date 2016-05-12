//Code started on 10 may 2016
/*
var firstName = "Prateek";
var age = 28;

console.log(firstName);

var awesomeThoughts = "I am Prateek and I am AWESOME";
$("#main").append(funThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//console.log(funThoughts);
$("#main").append(funThoughts);
*/

var name = "Prateek Goyal";

var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name );
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
