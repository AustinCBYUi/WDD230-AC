const currentTemp = document.querySelector("#currenttemp");
const weatherIcon = document.querySelector("#weathericon");
const description1 = document.querySelector("#currentDesc");

const currentTemp2 = document.querySelector("#tempTomorrow");
const weatherIcon2 = document.querySelector("#iconTomorrow");
const description2 = document.querySelector("#descTomorrow");

const currentTemp3 = document.querySelector("#tempDayAfter");
const weatherIcon3 = document.querySelector("#iconDayAfter");
const description3 = document.querySelector("#descDayAfter");

//These selectors are for the day itself, so if today is Monday,
// it will start from left to right being Monday, Tuesday Wednesday.
const todayDiv = document.querySelector("#today");
const tmrwDiv = document.querySelector("#tomorrow");
const dayAfter = document.querySelector("#dayAfterTomorrow");


const urlTmrw = `https://api.openweathermap.org/data/2.5/forecast?lat=33.58&lon=-112.23&units=imperial&appid=838f172a8bd0ab2aa58b4380db742287`;


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
/**
 * Fetches a response from the URL parameter which is sent to display the results
 * in a function. Only URL and index are technically modifiable. tempDiv and iconDiv
 * are meant to populate the divs in the HTML by directly targetting them.
 * @param {*} url - API URL
 * @param {*} tempDiv - Div from the HTML Document as a target for the temperature
 * @param {*} iconDiv - Div from the HTML document as a target for the icon
 * @param {*} index - Index number of which response to access.
 */
async function fetchAPI(url, tempDiv, iconDiv, descDiv, index) {
    try {
        //try to fetch, whatever is fetched is stored
        //in the response variable.
        const response = await fetch(url);
        //if the response is not null..
        if (response.ok) {
            //store the response in a variable named data
            const data = await response.json();
            //and plug that response into our other function
            // console.log(data);
            displayResults(data, tempDiv, iconDiv, descDiv, index);
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

//Index 3, 11, 19 for three day forecast at 12:00PM

//displays results to the document query selectors
function displayResults(data, tempDiv, iconDiv, descDiv, index) {
    //Rounding the temperature as 55.65 degrees
    //is relatively useless to display.
    var temp = Math.round(data.list[index].main.temp, 0);
    //set the current temperature that is fetched to
    //the query selector in the HTML.
    tempDiv.innerHTML = `${temp}&deg;F`;
    //icon using api's url
    const icon = `https://openweathermap.org/img/w/${data.list[index].weather[0].icon}.png`;
    //description index according to fetch function.
    let description = data.list[index].weather[0].description;
    //Add description of the sky to span
    descDiv.innerHTML = description;
    //setting the constants of query selectors to the
    //data we have above.
    iconDiv.setAttribute("src", icon);
    iconDiv.setAttribute("alt", description);
}

//Call the fetch.
//Today
fetchAPI(urlTmrw, currentTemp, weatherIcon, description1, 3);
//Tomorrow,
fetchAPI(urlTmrw, currentTemp2, weatherIcon2, description2, 11);
// fetchAPI(urlTmrw, c)
fetchAPI(urlTmrw, currentTemp3, weatherIcon3, description3, 19);
getDay();
