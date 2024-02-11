const baseURL = "https://AustinCBYUi.github.io/wdd230/";
const dataURL = `${baseURL}chamber/data/members.json`;
const populate = document.querySelector("#populate");

async function getData() {
    try {
        const response = await fetch(dataURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayData(data.info);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

var counter = -1;
const displayData = (infos) => {
    infos.forEach((info) => {
        counter ++;
        console.log(info); //info.members[3].name works, info.members[3] works
        let div = document.createElement("div");

        let h3 = document.createElement("h3");
        let p = document.createElement("p");

        h3.innerHTML = info.members.name;
        p.textContent = info.members.phone;

        div.className = "box";

        div.appendChild(h3);
        div.appendChild(p);

        populate.appendChild(div);

    });
}

getData();