var pageFlag = false;

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
    if (triggeredElement === "raghu") {
        element.setAttribute("src", "images/ourPics/raghu.jpg");
    } else if (triggeredElement === "praveen") {
        element.setAttribute("src", "images/ourPics/praveen.jpg");
    } else if (triggeredElement === "chethan") {
        element.setAttribute("src", "images/ourPics/chethan.jpg");
    } else if (triggeredElement === "kushal") {
        element.setAttribute("src", "images/ourPics/kushal.jpg");
    } else if (triggeredElement === "sachin") {
        element.setAttribute("src", "images/ourPics/sachin.jpg");
    } else if (triggeredElement === "harsha") {
        element.setAttribute("src", "images/ourPics/harsha.jpg");
    }
}

function ourPicChangeAgain(element) {
    var triggeredElement = event.target.id;
    if (triggeredElement === "raghu") {
        element.setAttribute("src", "images/ourPics/raghu1.jpg");
    } else if (triggeredElement === "praveen") {
        element.setAttribute("src", "images/ourPics/praveen1.jpg");
    } else if (triggeredElement === "chethan") {
        element.setAttribute("src", "images/ourPics/chethan1.jpg");
    } else if (triggeredElement === "kushal") {
        element.setAttribute("src", "images/ourPics/kushal1.jpg");
    } else if (triggeredElement === "sachin") {
        element.setAttribute("src", "images/ourPics/sachin1.jpg");
    } else if (triggeredElement === "harsha") {
        element.setAttribute("src", "images/ourPics/harsha1.jpg");
    }
}

function bookTicket() {
    document.getElementById("eventInfo").style.display = "none";
    document.getElementById("regForm").style.display = "inline-block";
}

function registerUser() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var emailId = document.getElementById("emailId").value;

    if (firstName === "" || lastName === "" || phoneNumber === "" || emailId === "") {
        alert("All the fields are mandatory");
        throw new Error("Field values mandatory");
    } else {
        var regNumber = Math.floor(Math.random() * 989999 + 100000);
        var toEmailId = "bmfun.events@gmail.com";
        var subject = "Registration for Tadiandamol Trek";
        var body = "First Name : " + firstName + "\n\
                Last Name : " + lastName + "\n\
                Phone Number : " + phoneNumber + "\n\
                Email Id : " + emailId + "\n\
                Reference code : " + regNumber;

        document.location = "mailto:" + toEmailId + "?subject=" + subject + "&body=" + body;
        
        document.getElementById("regForm").style.display = "none";
        document.getElementById("regSuccess").style.display = "inline-block";
        document.getElementById("regNumber").value = regNumber;
    }

}

function backToEvent() {
    document.getElementById("eventInfo").style.display = "inline-block";
    document.getElementById("regSuccess").style.display = "none";
}

function backToHome() {
    window.location.href = "/bookmyfun/index.html";
}

function bookTicketFromHome() {
    this.pageFlag = true;
    window.location.href = "/bookmyfun/tadiandamol.html";
}

function checkParentCall() {
    if(this.pageFlag) {
        document.getElementById("eventInfo").style.display = "none";
        document.getElementById("regForm").style.display = "inline-block";
    } else {
        document.getElementById("eventInfo").style.display = "inline-block";
        document.getElementById("regForm").style.display = "none";
    }
}