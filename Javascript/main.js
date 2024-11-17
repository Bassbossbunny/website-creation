// Adding current date to footer
window.onload = function footerFunction() {
    const currentYear = new Date().getFullYear();  

    const fullDate = new Date().toLocaleString();  

    document.getElementById('current-year').textContent = currentYear;

    // Date to Console
    console.log("Current Date: " + fullDate);
};

// Hello User - based on time of day

window.onload = function() {
    const currentHour = new Date().getHours(); // reminder!! it is a 0-23. JS is zero indexed!!!
    const HelloMessage = document.getElementById("Hello-Message");
    const HelloContainer = document.getElementById("Hello-User");

    // gosh darn loops, I tell ya... reminder check notes for shorthand symbols. 
    if (currentHour < 12) {
        HelloMessage.textContent = "Well, don't you look lovely this morning!";
        greetingContainer.classList.add("morning");
    } else if (currentHour >= 12 && currentHour < 17) {
        HelloMessage.textContent = "Such a lovely afternoon to look at some art!";
        HelloContainer.classList.add("afternoon");
    } else {
        HelloMessage.textContent = "Up late, are we? Hope you have a lovely evening!";
        HelloContainer.classList.add("evening");
    }
};

//button stuff, on about me page

window.onload = function loadButton() {
    console.log("buttons are stupid")
    const FoxMotif = document.getElementById("btn-alert");
    FoxMotif.onclick = function alertfuction() {
        alert("Careful, I bite!");
    };
};