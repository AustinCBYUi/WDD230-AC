
// today's date
const theDateToday = new Date();

// initialize display elements
const visited = document.querySelector("#visit");

//Needed to reconstruct a new date.
let getLastVisit = new Date(localStorage.getItem("lastVisit-ac")) || 0;

//Converts days into specific days of month.
let tomorrow = theDateToday.getUTCDate() + 1; //+ 1 works to add a day
let lastVis = getLastVisit.getUTCDate();

//Subtracts last time the page was visited from today.
let mathForLastVis = lastVis - theDateToday.getUTCDate();


//Logic, if the difference is less than or equal to .99, then it will display Back so soon..
if (lastVis - tomorrow <= .99) {
    visited.textContent = "Back so soon! Awesome!";
//If the last visit is greater than 1, it will say how many days it's been since your last visit.
} else if (lastVis - tomorrow > 1) {
    visited.textContent = `You last visited ${mathForLastVis}`;
//This condition is if the user has never visited before.
} else {
    visited.textContent = "Welcome! Let us know if you have any questions!";
}

//Storage
window.localStorage.setItem("lastVisit-ac", theDateToday);

