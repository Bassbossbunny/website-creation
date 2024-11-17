// Adding current date to footer
window.onload = function() {

    const currentYear = new Date().getFullYear();  
    const fullDate = new Date().toLocaleString();  

    document.getElementById('current-year').textContent = currentYear;

    document.getElementById('full-date').textContent = "Current Date: " + fullDate;

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
const FoxMotif = document.getElementById("btn-alert");
    if (FoxMotif) {  // Check if the button exists on the page
        FoxMotif.onclick = function() {
            alert("Careful, I bite!");
        };
    };