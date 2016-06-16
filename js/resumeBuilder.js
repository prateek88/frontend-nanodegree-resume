var work = {
    "jobs" : [
    {
        "employer": "CSS corp",
        "title": "Senior Test analyst",
        "location": "Bangalore, India",
        "Dates": "2015-16",
        "Description": "Automating Test cases with Perl and Selenium"
    },
    {
        "employer": "TCS",
        "title": "Test analyst",
        "location": "Lucknow, India",
        "Dates": "2011-15",
        "Description": "Creating and executing manual testcases"
    }]
};

var projects = {
    "projects" : [
    {
        "title": "CPE QA",
        "dates" : "2012-15",
        "Description" : "Working for continuosly improve the product and quality assurance",
        "images" : ["images/NetApp.jpg"]
    },
    {
        "title": "QA Automation",
        "dates" : "2015-16",
        "Description" : "Automating testcases for SSL VPN product using Perl and Selenium",
        "images" : ["images/share.jpg"]
    }]
};

var bio = {
    "name" : "Prateek Goyal",
    "role" : "Student",
    "welcomeMessage" : "Explore the Unexpected here!",
    "contacts" : {
        "mobile" : "+91-7795607648",
        "email" : "prateek.goyal5@gmail.com",
        "github" : "prateek88",
        "twitter" : "@pratq",
        "location" : "Bangalore"
    },
    "skills" : ["Perl", "Selenium", "Javascript", "HTML", "CSS"]
};

var education = {
    "schools" : [
    {
        "name" : "Govt Inter College",
        "location" : "Dehradun",
        "Degree" : "Intermediate",
        "Majors" : "Science",
        "Dates" : "2005",
        "url" : ""
    },
    {
        "name" : "Pantnagar University",
        "location" : "Pantnagar",
        "Degree" : "B.Tech",
        "Majors" : "Computer Engineering",
        "Dates" : "2011",
        "url" : "www.gbpuat.ac.in"
    }],

    "onlineCourse" : [
    {
        "title" : "Intro to HTML and CSS",
        "school" : "Udacity",
        "dates" : "2016"
    },
    {
        "title" : "Git and Github",
        "school" : "Udacity",
        "dates" : "2016"
    },
    {
        "title" : "Responsive Images",
        "school" : "Udacity",
        "dates" : "2016"
    }
    ]
};

var formattedHeaderName = HTMLheaderName.replace( "%data%", "Prateek Goyal");
$("#header").append(formattedHeaderName);

if ( bio.skills.lenght !== 0 ){
	$("#header").append(HTMLskillsStart);
}

var formattedHTMLSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedHTMLSkills);

formattedHTMLSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedHTMLSkills);

formattedHTMLSkills = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedHTMLSkills);

formattedHTMLSkills = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedHTMLSkills);

function displayWork(){

	for ( job in work.jobs ){
        $("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].Dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].Description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}

//we don't have to use any parameter in this function, because this function is using an object that's in the global scope for the script, meaning it's accessible to the function which is also in the global scope.
displayWork();

/*$(document).click() is a jQuery event handler on the page, which is a fancy way of saying that it will hold some code that runs every time a user clicks on the page.

The function (that doesn't have a name, making it an anonymous function) that gets passed into .click() will be run every time a user clicks on the page.

loc is a jQuery event object.loc is a jQuery event object that contains information about the click event.
*/
$(document).click(function(location) {
    logClicks(location.pageX, location.pageY); //logClicks is defined in helper.js
});

$("#main").append(internationalizeButton);

function inName(){
    var myName = bio.name;
    var fullName = myName.split(" ");
    var firstName = fullName[0];
    var lastName = fullName[1];

    firstName = firstName.charAt(0).toUpperCase() + firstName.slice("1").toLowerCase();
    lastName = lastName.toUpperCase();

    fullName = firstName + " " + lastName;

    return fullName;
}

projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var Description = HTMLprojectDescription.replace("%data%", projects.projects[project].Description);
        var images = HTMLprojectImage.replace("%data%", projects.projects[project].images);

        $(".project-entry:last").append(title);
        $(".project-entry:last").append(dates);
        $(".project-entry:last").append(Description);
        $(".project-entry:last").append(images);
    }
}();   //anonymous function call

//projects.display();

$("#mapDiv").append(googleMap);
