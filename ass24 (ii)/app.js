// Qno1 . Display Current Date and Time
document.write("Current Date and Time: " + new Date());

// Qno2Alert Current Month in Words
const months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
const currentMonth = new Date().getMonth();
alert("Current month: " + months[currentMonth]);


// Qno3Alert First 3 Letters of the Current Day
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date().getDay();
alert("Today is: " + days[today]);



// Qno4 “It’s Fun day” if Saturday or Sunday
const day = new Date().getDay();
if (day === 0 || day === 6) {
    alert("It's Fun day");
}


// Qno5 First or Last Part of Month
const date = new Date().getDate();
if (date < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}


// Qno7 AM or PM
let hours = new Date().getHours();
if (hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}


// Qno8Date Object for Last Day of Last Month of 2020
let laterDate = new Date(2020, 11, 31); // Month is 0-indexed
document.write("Later Date: " + laterDate);


// Qno12 Date Reset 100 Years Back
let dateNow = new Date();
dateNow.setFullYear(dateNow.getFullYear() - 100);
alert("100 years back, it was: " + dateNow);






// Qno13 Ask User Age and Show Birth Year
let age = prompt("Enter your age:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);




