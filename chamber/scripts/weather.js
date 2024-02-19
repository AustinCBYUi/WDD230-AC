const currentTemp = document.querySelector("#currenttemp");
const weatherIcon = document.querySelector("#weathericon");

const currentTemp2 = document.querySelector("#tempTomorrow");
const weatherIcon2 = document.querySelector("#iconTomorrow");

const todayDiv = document.querySelector("#today");
const tmrwDiv = document.querySelector("#tomorrow");
const dayAfter = document.querySelector("#dayAfterTomorrow");

let date = new Date;
var year = date.toLocaleString("default", { year: "numeric"});
var month = date.toLocaleString("default", { month: "2-digit" });
var day = date.toLocaleString("default", { day: "2-digit" });
var tmrwInt = date.getDate() + 1;
var formattedDate = `${year}-${month}-${tmrwInt}`;
var idk = date.getTime();
var idktomorrow = idk + 86400000;
console.log(idk, idktomorrow);
const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.58&lon=-112.23&units=imperial&appid=838f172a8bd0ab2aa58b4380db742287";
// https://api.openweathermap.org/data/3.0/onecall/day_summary?lat={lat}&lon={lon}&date={date}&appid={API key}
const urlTmrw = `https://api.openweathermap.org/data/2.5/weather?lat=33.58&lon=-112.23&units=imperial&dt=${idktomorrow}&appid=838f172a8bd0ab2aa58b4380db742287`;


async function getDay() {
    //Today Logic
    let today = new Date;
    let todayInt = today.getDay();
    let todayString = dayToString(todayInt);
    todayDiv.textContent = todayString;

    //Tomorrow Logic
    let tmrwInt = today.getDay() + 1;
    let tmrwString = dayToString(tmrwInt);
    tmrwDiv.textContent = tmrwString;

    //Day After Tomorrow Logic
    let dATInt = today.getDay() + 2;
    let dATString = dayToString(dATInt);
    dayAfter.textContent = dATString;
}



/**
 * Function to match getDay() Integers. Probably a built in functionality, but whatevs.
 * Returns whatever day of the week it is based off index
 * @param {int} day - The index of the day of the week, 1 being Monday, 7 being Sunday.
 */ 
function dayToString(day) {
    if (day == 1) {
        return "Monday";
    }
    else if (day == 2) {
        return "Tuesday";
    }
    else if (day == 3) {
        return "Wednesday";
    }
    else if (day == 4) {
        return "Thursday";
    }
    else if (day == 5) {
        return "Friday";
    }
    else if (day == 6) {
        return "Saturday";
    }
    else if (day == 7) {
        return "Sunday";
    } else {
        return "Error";
    }
}



//async function to try fetching and taking response
async function fetchAPI(url, tempDiv, iconDiv) {
    try {
        //try to fetch, whatever is fetched is stored
        //in the response variable.
        const response = await fetch(url);
        //if the response is not null..
        if (response.ok) {
            //store the response in a variable named data
            const data = await response.json();
            //and plug that response into our other function
            displayResults(data, currentTemp, weatherIcon);
            console.table(data);
        } else {
            //all else, throw an error with the awaitted
            //response text as the error..
            throw Error(await response.text());
        }
        //that is then caught from line 20 and logged in console
    } catch (error) {
        console.log(error);
    }
}



//displays results to the document query selectors
function displayResults(data, tempDiv, iconDiv) {
    //Rounding the temperature as 55.65 degrees
    //is relatively useless to display.
    var temp = Math.round(data.main.temp, 0);
    //set the current temperature that is fetched to
    //the query selector in the HTML.
    tempDiv.innerHTML = `${temp}&deg;F`;
    //icon using api's url
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    //description index according to fetch function.
    let description = data.weather[0].description;
    //setting the constants of query selectors to the
    //data we have above.
    iconDiv.setAttribute("src", icon);
    iconDiv.setAttribute("alt", description);
}

//Call the fetch.
fetchAPI(url, currentTemp, weatherIcon);
fetchAPI(urlTmrw, currentTemp2, weatherIcon2);
getDay();
