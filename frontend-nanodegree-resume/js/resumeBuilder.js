var bio = {
    "name": "Guilherme Camara",
    "role": "Software Developer",
    "contacts": {
        "email": "guilines@gmail.com",
        "mobile": "999-777-999",
        "github": "guilines",
        "twitter": "@guilines",
        "location": "Sao Paulo"
    },
    "biopic": "images/me.jpg",
    "welcomeMessage": "[Insert effect phrase here]",
    "skills": ["C++","Python","Javascript"]
};

var work = {
    "jobs" : [
        {
            "employer": "Embraer: Defense and Security",
            "title": "Software Development Engineer",
            "location": "Campinas, SP, Brazil",
            "dates": "Ago/2014 - PRESENT",
            "description": "Development of a wide range of software applications, from systems libraries to parts of digital signal processing codes. " +
            "System applications developed to run on a FPGA board in PowerPc & Amd64 architecture. " +
            "Activities integrating systems’ software & hardware and elaborating its testing procedure dossiers. " +
            "Full stack development in: C++, Python, JavaScript, HTML, Matlab and IDL."
        }
    ]
};

var education = {
    "schools" : [
        {
            "name": "Unicamp",
            "location": "Campinas, SP, Brazil",
            "degree": "Electrical Engineer",
            "dates": "Mar/2010 - Jul/2015",
            "majors": ["Electronics"]
        }
    ],
    "onlineCourses" : [
        {
            "title": "Machine Learning Engineering",
            "school": "Udacity",
            "dates" : "11/2016 - 02/2017",
            "url": "udacity.com"
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Stock Prices Indicator",
            "dates" : "2017",
            "description": "The future value of a company stock over a period of time can be predicted using a methodology known " +
            "as Stock Market prediction. Given some metrics over a period, such as opening stock price, volume of " +
            "stocks traded and highest stock price traded, predictions can be done using an algorithm. The analyses " +
            "of all possible inputs are carried out, in order to predict the Adjusted Close stock price (in other words, " +
            "the future value of the company).",
            "images" : ["images/197x148.gif","images/197x148.gif"]
        }
    ]
};


var _data="%data%";
$("#main").append(internationalizeButton);


//---------------------------BIO Section
bio.display = function() {
    var formattedName = HTMLheaderName.replace(_data, bio.name);
    var formattedRole = HTMLheaderRole.replace(_data, bio.role);
    var formattedWelcome = HTMLwelcomeMsg.replace(_data, bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace(_data, bio.biopic);
    var formattedEmail = HTMLemail.replace(_data, bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace(_data, bio.contacts.twitter);
    var formattedGit = HTMLgithub.replace(_data, bio.contacts.github);
    var formattedMobile = HTMLmobile.replace(_data, bio.contacts.mobile);
    var formattedLocation = HTMLlocation.replace(_data, bio.contacts.location);

    $(".flex-box").append(formattedMobile);
    $(".flex-box").append(formattedEmail);
    $(".flex-box").append(formattedGit);
    $(".flex-box").append(formattedTwitter);
    $(".flex-box").append(formattedLocation);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcome);

    if (bio.skills.length) {
        $("#header").append(HTMLskillsStart);
        // $("#header").append(bio.skills.join(" "));

        bio.skills.forEach(function (skill) {
            var formatedSkill = HTMLskills.replace(_data, skill);
            $("#skills").append(formatedSkill);

        });
    }
};
bio.display();

//---------------------------WORK Section
work.display = function(){
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace(_data,job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace(_data,job.title);
        var formattedWorkDate = HTMLworkDates.replace(_data,job.dates);
        var formattedWorkDesc = HTMLworkDescription.replace(_data,job.description);
        var formattedWorkLoc = HTMLworkLocation.replace(_data,job.location);

        $(".work-entry:last").append(formattedWorkEmployer+formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkLoc);
        $(".work-entry:last").append(formattedWorkDate);
        $(".work-entry:last").append(formattedWorkDesc);
    });
};
work.display();


//---------------------------PROJECTS Section
projects.display = function(){
    projects.projects.forEach(function(proj){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace(_data,proj.title);
        var formattedDates = HTMLprojectDates.replace(_data,proj.dates);
        var formattedDesc = HTMLprojectDescription.replace(_data,proj.description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDesc);

        if (proj.images.length) {
            proj.images.forEach(function (img) {
                var formattedImage = HTMLprojectImage.replace(_data,img);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};
projects.display();


//---------------------------Education Section
education.display = function(){
    education.schools.forEach(function(sch){
        $("#education").append(HTMLschoolStart);
        var fmtName = HTMLschoolName.replace(_data,sch.name);
        var fmtLoc = HTMLschoolLocation.replace(_data,sch.location);
        var fmtDeg = HTMLschoolDegree.replace(_data,sch.degree);
        var fmtDates = HTMLschoolDates.replace(_data,sch.dates);
        var fmtMajors = HTMLschoolMajor.replace(_data,sch.majors);

        $(".education-entry:last").append(fmtName+fmtDeg);
        $(".education-entry:last").append(fmtLoc);
        $(".education-entry:last").append(fmtDates);
        $(".education-entry:last").append(fmtMajors);
    });
    education.onlineCourses.forEach(function(online){
        var fmtTitle = HTMLonlineTitle.replace(_data,online.title);
        var fmtSchool = HTMLonlineSchool.replace(_data,online.school);
        var fmtDates = HTMLonlineDates.replace(_data,online.dates);
        var fmtURL = HTMLonlineURL.replace(_data,online.url);

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(fmtTitle+fmtSchool);
        $(".education-entry:last").append(fmtDates);
        $(".education-entry:last").append(fmtURL);


    });

};
education.display();


//--------------------------- Other
function logClicks(x,y) {
    console.log(x,y);
}

function inName(name) {
    name=name.split(" ");
    name[1]=name[1].toUpperCase();
    return name.join(" ");
}
$(document).click(function(loc) {
    // console.log(loc);
    logClicks(loc.pageX,loc.pageY);
});


$("#mapDiv").append(googleMap);