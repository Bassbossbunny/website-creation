// Adding current date to footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();  
    const fullDate = new Date().toLocaleString(); 
    document.getElementById('current-year').textContent = currentYear;

  
    // Log to console
    console.log("Current Date: " + fullDate);
}
);

//button stuff, on about me page

const WarningButton = document.getElementById("textbutton");
if (WarningButton){
    WarningButton.onmouseover = function() {
        WarningButton.innerText = "DANGER";
        WarningButton.style.backgroundColor = "red"
    };
    WarningButton.onmouseout = function() {
        WarningButton.innerText = "Warning";
         WarningButton.style.backgroundColor = "black"
    };
    WarningButton.onclick = function() {
        alert("Don't touch the fox. She bites...")
    };

}



const FoxMotif = document.getElementById("btn-alert");
    if (FoxMotif) {  
        FoxMotif.onclick = function() {
            alert("*CHOMP*");
        };
    };
