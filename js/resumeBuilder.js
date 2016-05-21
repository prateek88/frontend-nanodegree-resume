var work = {
    "jobs" : [
    {
        "employer": "CSS corp",
        "title": "Senior Test analyst",
        "location": "Bangalore",
        "Dates": "2015-16",
        "Description": "Automating Test cases with Perl and Selenium"
    },
    {
        "employer": "TCS",
        "title": "Test analyst",
        "location": "Bangalore",
        "Dates": "2011-15",
        "Description": "Creating and executing manual testcases"
    }]
};

var projects = {
    "projects" : [
    {
        "title": "CPE QA",
        "dates" : "2012-15",
        "Description" : "Working for continuosly improve the product",
        "images" : []
    },
    {
        "title": "QA Automation",
        "dates" : "2015-16",
        "Description" : "Automating testcases for SSL VPN product",
        "images" : []
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
	$("#workExperience").append(HTMLworkStart);

	for ( job in work.jobs ){
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

displayWork();
