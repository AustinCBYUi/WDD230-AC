// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const theDateToday = new Date();

// initialize display elements
const visited = document.querySelector("#visit");

let numOfVisits = Number(window.localStorage.getItem("visit-ac")) || 0;
let dateOfVisit = Date(window.localStorage.getItem("visitDate-ac")) || 0;
let dateOfLastVisit = Date(window.localStorage.getItem("lastVisit-ac")) || 0;

dateOfVisit = theDateToday;

if (numOfVisits !== 0) {
    visited.textContent = "Last visit is " + dateOfLastVisit + " and today is " + theDateToday;
} else {
    visited.textContent = "Welcome! Let us know if you have any questions!";
}

numOfVisits++;
dateOfLastVisit++;

localStorage.setItem("visit-ac", numOfVisits);
localStorage.setItem("visitDate-ac", dateOfVisit);
localStorage.setItem("lastVisit-ac", dateOfLastVisit);


// processing
const today = Date.now();
const christmasDate = new Date(Date.UTC(theDateToday.getFullYear(), 11, 25));
// check if is the waing days of December, if so ... change to next year.
if (theDateToday.getMonth() == 11 && theDateToday.getDate() > 25) {
	christmasDate.setFullYear(christmasDate.getFullYear() + 1);
}
// find difference between epoch times in ms and convert to days
let daysleft = (christmasDate.getTime() - Date.now()) / msToDays;

todayElement.textContent = today;
christmasElement.textContent = christmasDate.getTime();
christmasDateElement.textContent = christmasDate;
daysElement.textContent = `${daysleft.toFixed(0)} days`;
