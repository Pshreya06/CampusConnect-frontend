// =========================================
// CAMPUSCONNECT - EVENT DETAILS
// =========================================


// =========================================
// EVENT DATA
// =========================================

const events = {

    hackathon: {
        category: "HACKATHON",
        title: "Campus Hackathon 2026",

        intro:
            "Build innovative solutions, solve real-world problems and compete with students across campus.",

        date: "25 October 2026",
        time: "9:00 AM – 5:00 PM",
        venue: "Campus Hall",
        organizer: "Coding Club",

        about: [
            "Campus Hackathon 2026 is an opportunity for students to collaborate, experiment and create innovative solutions to real-world problems.",
            "Participants can form teams, develop their ideas and present their solutions to a panel of judges."
        ],

        participation:
            "The event is open to students interested in technology, innovation, programming and problem solving.",

        teamSize: "2 – 4 students",
        participationType: "Team based"
    },


    workshop: {
        category: "WORKSHOP",
        title: "Web Development Workshop",

        intro:
            "Learn modern web development fundamentals and build your first interactive website.",

        date: "28 October 2026",
        time: "10:00 AM – 1:00 PM",
        venue: "Lab 204",
        organizer: "Web Development Club",

        about: [
            "This workshop introduces students to the fundamentals of modern web development.",
            "Participants will learn how HTML, CSS and JavaScript work together to create interactive websites."
        ],

        participation:
            "Open to students interested in web development and programming. No advanced experience is required.",

        teamSize: "Individual",
        participationType: "Hands-on workshop"
    },


    seminar: {
        category: "SEMINAR",
        title: "Future of Technology",

        intro:
            "Explore emerging technologies and how they are shaping the future of engineering and innovation.",

        date: "2 November 2026",
        time: "11:00 AM – 1:00 PM",
        venue: "Auditorium",
        organizer: "Innovation Cell",

        about: [
            "The Future of Technology seminar explores emerging technologies and their growing impact on education, engineering and society.",
            "Students will gain insights into current technological trends and future opportunities."
        ],

        participation:
            "Open to all students interested in technology, innovation and emerging trends.",

        teamSize: "Individual",
        participationType: "Seminar"
    },


    competition: {
        category: "COMPETITION",
        title: "Code Sprint Challenge",

        intro:
            "Test your programming skills through a series of exciting coding challenges.",

        date: "6 November 2026",
        time: "10:00 AM – 2:00 PM",
        venue: "Computer Lab",
        organizer: "Coding Club",

        about: [
            "Code Sprint Challenge is a programming competition designed to test problem-solving and coding skills.",
            "Participants will solve a series of programming challenges within a fixed time limit."
        ],

        participation:
            "Open to students with an interest in programming and competitive coding.",

        teamSize: "Individual",
        participationType: "Programming competition"
    },


    cultural: {
        category: "CULTURAL",
        title: "Campus Cultural Fest",

        intro:
            "Celebrate creativity, music, dance and the diverse culture of our campus community.",

        date: "12 November 2026",
        time: "4:00 PM – 8:00 PM",
        venue: "Main Ground",
        organizer: "Cultural Committee",

        about: [
            "Campus Cultural Fest brings students together to celebrate creativity, music, dance and cultural expression.",
            "Students can participate in performances and activities or attend the event as visitors."
        ],

        participation:
            "Open to all students of the campus community.",

        teamSize: "Individual or group",
        participationType: "Cultural activity"
    },


    design: {
        category: "DESIGN",
        title: "UI/UX Design Workshop",

        intro:
            "Learn design thinking, user research and the fundamentals of creating user-friendly digital experiences.",

        date: "18 November 2026",
        time: "2:00 PM – 5:00 PM",
        venue: "Design Studio",
        organizer: "Design Club",

        about: [
            "This workshop introduces students to the principles of UI/UX design and user-centered thinking.",
            "Participants will explore user research, wireframing and the basics of creating digital interfaces."
        ],

        participation:
            "Open to students interested in design, technology and digital products.",

        teamSize: "Individual",
        participationType: "Hands-on workshop"
    }

};


// =========================================
// GET EVENT FROM URL
// =========================================

// Example URL:
//
// event-details.html?id=hackathon
//
// The "id" tells us which event to display.

const urlParameters =
    new URLSearchParams(window.location.search);

const eventId =
    urlParameters.get("id") || "hackathon";


// Find the selected event

const selectedEvent =
    events[eventId];


// =========================================
// PAGE ELEMENTS
// =========================================

const categoryElement =
    document.querySelector(".event-detail-category");

const titleElement =
    document.querySelector(".event-detail-header h1");

const introElement =
    document.querySelector(".event-detail-intro");

const dateElement =
    document.querySelectorAll(".event-info-card strong")[0];

const timeElement =
    document.querySelectorAll(".event-info-card strong")[1];

const venueElement =
    document.querySelectorAll(".event-info-card strong")[2];

const organizerElement =
    document.querySelectorAll(".event-info-card strong")[3];

const detailSections =
    document.querySelectorAll(".detail-section");


// =========================================
// DISPLAY EVENT
// =========================================

if (selectedEvent) {

    // Category

    categoryElement.textContent =
        selectedEvent.category;


    // Title

    titleElement.textContent =
        selectedEvent.title;


    // Introduction

    introElement.textContent =
        selectedEvent.intro;


    // Date

    dateElement.textContent =
        selectedEvent.date;


    // Time

    timeElement.textContent =
        selectedEvent.time;


    // Venue

    venueElement.textContent =
        selectedEvent.venue;


    // Organizer

    organizerElement.textContent =
        selectedEvent.organizer;


    // About section

    const aboutParagraphs =
        detailSections[0].querySelectorAll("p");

    aboutParagraphs.forEach(function(paragraph, index) {

        paragraph.textContent =
            selectedEvent.about[index];

    });


    // Who can participate

    detailSections[2]
        .querySelector("p")
        .textContent =
        selectedEvent.participation;


    // Team information

    const teamValues =
        document.querySelectorAll(
            ".team-info span"
        );

    teamValues[0].textContent =
        selectedEvent.teamSize;

    teamValues[1].textContent =
        selectedEvent.participationType;

}


// =========================================
// REGISTRATION BUTTON
// =========================================

const registerButton =
    document.getElementById("registerButton");


registerButton.addEventListener(
    "click",
    function() {

        alert(
            "Registration successful!\n\n" +
            "You have registered for " +
            selectedEvent.title +
            "."
        );

    }
);


// =========================================
// PAGE LOAD MESSAGE
// =========================================

console.log(
    "CampusConnect Event Details loaded:",
    selectedEvent
);