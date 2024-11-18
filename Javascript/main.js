

// Adding current date to footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();  
    const fullDate = new Date().toLocaleString(); 
    document.getElementById('current-year').textContent = currentYear;

  
    // Log to console
    console.log("Current Date: " + fullDate);
}
);


// Hello User - based on time of day

window.onload = function() {
 helloUserMessage ()   



};
function helloUserMessage () {
    const currentHour = new Date().getHours(); 
    // reminder!! it is a 0-23. JS is zero indexed!!!
    const HelloMessage = document.getElementById("Hello-Message");
    const HelloContainer = document.getElementById("Hello-User");

    // gosh-darn if else statements, I tell ya... reminder check notes for shorthand symbols. 

    if (currentHour < 12) {
        HelloMessage.textContent = "Well, don't you look lovely this morning!";
        HelloContainer.classList.add("morning");

    } else if (currentHour >= 12 && currentHour < 17) {
        HelloMessage.textContent = "Such a lovely afternoon to look at some art!";
        HelloContainer.classList.add("afternoon");

    } else {
        HelloMessage.textContent = "Up late, are we? Hope you have a lovely evening!";
        HelloContainer.classList.add("evening");
    }
}


  