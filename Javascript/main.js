// Adding current date to footer
window.onload = function() {
    const currentYear = new Date().getFullYear();  

    const fullDate = new Date().toLocaleString();  

    document.getElementById('current-year').textContent = currentYear;

    // Date to Console
    console.log("Current Date: " + fullDate);
};


