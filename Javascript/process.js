// Adding current date to footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();  
    const fullDate = new Date().toLocaleString(); 
    document.getElementById('current-year').textContent = currentYear;

  
    // Log to console
    console.log("Current Date: " + fullDate);
}
);

window.onload = function() {
    
    numbersList()
};
  // numbers ol

    //Bonus question: i++ is better syntax than i+1.

    function numbersList() {
        const ol = document.getElementById("numbers");
    for(let i=1; i <= 14; i++) {
        let listitem = document.createElement("li");
        if (i % 2 === 0) {
            listitem.textContent = "even";
        } else {
            listitem.textContent = "odd";
        }  
        ol.appendChild(listitem);
    };
    }