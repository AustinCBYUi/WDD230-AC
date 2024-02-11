const baseURL = "https://AustinCBYUi.github.io/wdd230/";
const dataURL = `${baseURL}chamber/data/members.json`;
const populate = document.querySelector("#populate");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

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
        let section = document.createElement("section");

        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let address = document.createElement("p");
        let aweb = document.createElement("a");
        let logo = document.createElement("img");
        let mem = document.createElement("p");

        let website = infos[counter].web;
        let logoURL = infos[counter].image;

        h2.innerHTML = infos[counter].name;
        p.textContent = "Phone: " + infos[counter].phone;
        address.textContent = "Address: " + infos[counter].address;
        aweb.textContent = `Website: ${website}`;
        //logo here
        mem.textContent = "Membership: " + infos[counter].mem;

        aweb.setAttribute("href", website);
        logo.setAttribute("src", logoURL);
        logo.setAttribute("alt", `${infos[counter].name} logo`);

        section.className = "grid";

        section.appendChild(h2);
        section.appendChild(logo);
        section.appendChild(p);
        section.appendChild(address);
        section.appendChild(aweb);
        section.appendChild(mem);

        populate.appendChild(section);

    });
}


getData();


function gridPopulate() {
    populate.style = "";
    // populate.style = "width:95%;display:grid;grid-template-columns:500px 500px 500px;margin:0 auto;justify-content:space-around;grid-gap:5px;align-items:center;padding:10px;";
    gridButton.className = "active";
    listButton.className = "";

    // var getBox = document.getElementsByClassName("list");
    // // loop(getBox, "grid", "list");
    // getBox.classList.add("grid");
    // getBox.classList.remove("list");
}

function listPopulate() {
    populate.style = "";
    populate.style = "display:flex;width:95%;flex-direction:column;margin:0 auto;justify-content:space-around;grid-gap:5px;align-items:center;padding:10px;"
    listButton.className = "active";
    gridButton.className = "";


    // var getList = document.getElementsByClassName("grid");
    // loop(getList, "list", "grid");
    // getList.classList.add("list");
    // getList.classList.remove("grid");
}

gridButton.addEventListener("click", () => {
	// example using arrow function
	populate.classList.remove("list");
    gridPopulate();
});

listButton.addEventListener("click", showList); // example using defined function


function showList() {
	populate.classList.add("list");
	populate.classList.remove("grid");
    listPopulate();
}