const baseURL = "https://AustinCBYUi.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;
const weekList = document.querySelector("#week");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

var weekCount = -1;
const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        weekCount++;
        let list = document.createElement("li");
        let anchor = document.createElement("a");

        list.textContent = `${weeks[weekCount].week}: `;

        anchor.setAttribute("href", week.links[weekCount].url);
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("cursor", "pointer");
        anchor.innerText = `${week.links[weekCount].title}`;

        list.appendChild(anchor);

        weekList.appendChild(list);
    });
}


getLinks();