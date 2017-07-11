function openHome() {
    var homePage = document.getElementById("homePage");
    var aboutUsPage = document.getElementById("aboutUsPage");
    var eventsPage = document.getElementById("eventsPage");
    var preEventsPage = document.getElementById("preEventsPage");
    var contactPage = document.getElementById("contactPage");

    homePage.style.display = 'inline-block';
    aboutUsPage.style.display = 'none';
    eventsPage.style.display = 'none';
    preEventsPage.style.display = 'none';
    contactPage.style.display = 'none';
}

function openAboutUs() {
    var homePage = document.getElementById("homePage");
    var aboutUsPage = document.getElementById("aboutUsPage");
    var eventsPage = document.getElementById("eventsPage");
    var preEventsPage = document.getElementById("preEventsPage");
    var contactPage = document.getElementById("contactPage");

    homePage.style.display = 'none';
    aboutUsPage.style.display = 'inline-block';
    eventsPage.style.display = 'none';
    preEventsPage.style.display = 'none';
    contactPage.style.display = 'none';
}

function openEvents() {
    var homePage = document.getElementById("homePage");
    var aboutUsPage = document.getElementById("aboutUsPage");
    var eventsPage = document.getElementById("eventsPage");
    var preEventsPage = document.getElementById("preEventsPage");
    var contactPage = document.getElementById("contactPage");

    homePage.style.display = 'none';
    aboutUsPage.style.display = 'none';
    eventsPage.style.display = 'inline-block';
    preEventsPage.style.display = 'none';
    contactPage.style.display = 'none';
}

function openPreEvents() {
    var homePage = document.getElementById("homePage");
    var aboutUsPage = document.getElementById("aboutUsPage");
    var eventsPage = document.getElementById("eventsPage");
    var preEventsPage = document.getElementById("preEventsPage");
    var contactPage = document.getElementById("contactPage");

    homePage.style.display = 'none';
    aboutUsPage.style.display = 'none';
    eventsPage.style.display = 'none';
    preEventsPage.style.display = 'inline-block';
    contactPage.style.display = 'none';
}

function openContact() {
    var homePage = document.getElementById("homePage");
    var aboutUsPage = document.getElementById("aboutUsPage");
    var eventsPage = document.getElementById("eventsPage");
    var preEventsPage = document.getElementById("preEventsPage");
    var contactPage = document.getElementById("contactPage");

    homePage.style.display = 'none';
    aboutUsPage.style.display = 'none';
    eventsPage.style.display = 'none';
    preEventsPage.style.display = 'none';
    contactPage.style.display = 'inline-block';
}

function ourPicChange(element) {
    var triggeredElement = event.target.id;
    if(triggeredElement === "raghu") {
        element.setAttribute("src","images/ourPics/raghu.jpg");
    } else if(triggeredElement === "praveen") {
        element.setAttribute("src","images/ourPics/praveen.jpg");
    } else if(triggeredElement === "chethan") {
        element.setAttribute("src","images/ourPics/chethan.jpg");
    } else if(triggeredElement === "kushal") {
        element.setAttribute("src","images/ourPics/kushal.jpg");
    } else if(triggeredElement === "sachin") {
        element.setAttribute("src","images/ourPics/sachin.jpg");
    } else if(triggeredElement === "harsha") {
        element.setAttribute("src","images/ourPics/harsha.jpg");
    }
}

function ourPicChangeAgain(element) {
    var triggeredElement = event.target.id;
    if(triggeredElement === "raghu") {
        element.setAttribute("src","images/ourPics/raghu1.jpg");
    } else if(triggeredElement === "praveen") {
        element.setAttribute("src","images/ourPics/praveen1.jpg");
    } else if(triggeredElement === "chethan") {
        element.setAttribute("src","images/ourPics/chethan1.jpg");
    } else if(triggeredElement === "kushal") {
        element.setAttribute("src","images/ourPics/kushal1.jpg");
    } else if(triggeredElement === "sachin") {
        element.setAttribute("src","images/ourPics/sachin1.jpg");
    } else if(triggeredElement === "harsha") {
        element.setAttribute("src","images/ourPics/harsha1.jpg");
    }
}
