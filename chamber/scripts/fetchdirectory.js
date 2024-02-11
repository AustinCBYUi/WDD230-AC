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
        let address = document.createElement("p");
        let aweb = document.createElement("a");
        let logo = document.createElement("img");
        let mem = document.createElement("p");

        let website = infos[counter].web;

        h3.innerHTML = infos[counter].name;
        p.textContent = "Phone: " + infos[counter].phone;
        address.textContent = "Address: " + infos[counter].address;
        aweb.textContent = `Website: ${website}`;
        //logo here
        mem.textContent = "Membership: " + infos[counter].mem;

        aweb.setAttribute("href", website);

        div.className = "box";

        div.appendChild(h3);
        div.appendChild(logo);
        div.appendChild(p);
        div.appendChild(address);
        div.appendChild(aweb);
        div.appendChild(mem);

        populate.appendChild(div);

    });
}

getData();