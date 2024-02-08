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


// Commenting logic behind this.

//Week counter starting at -1, but really this
//counts each index in a object? 
var weekCount = -1;
const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        weekCount++;

        let list = document.querySelector("li");

        list.textContent = `${weeks[weekCount].week}: `;

        var listCount = -1;
        week.links.forEach((link) => {
            // console.log(link);
            listCount++;
            let anchor = document.createElement("a");

            anchor.setAttribute("href", week.links[listCount].url);
            anchor.setAttribute("target", "_blank");
            anchor.setAttribute("cursor", "pointer");

            anchor.innerText = ` | ${week.links[listCount].title}`;

            list.appendChild(anchor);

            weekList.appendChild(list);
        });
    });
}


getLinks();