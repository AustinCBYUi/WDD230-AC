const spotlight = document.querySelector(".spotlight");
const baseURL = "https://AustinCBYUi.github.io/wdd230/";
const dataURL = `${baseURL}chamber/data/members.json`;

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
        counter += 1;
        console.log(info); //info.members[3].name works, info.members[3] works
        if (counter < 3) {
            var random = Math.floor(Math.random() * 7);
            if (infos[random].mem == "Silver" || infos[random].mem == "Gold") {

                let section = document.createElement("div");

                let h2 = document.createElement("h2");
                let p = document.createElement("p");
                let address = document.createElement("p");
                let aweb = document.createElement("a");
                let logo = document.createElement("img");
                let mem = document.createElement("p");

                console.log(Math.floor(Math.random() * 6));

                let website = infos[random].web;
                let logoURL = infos[random].image;

                h2.innerHTML = infos[random].name;
                p.textContent = "Phone: " + infos[random].phone;
                address.textContent = "Address: " + infos[random].address;
                aweb.textContent = `Website: ${website}`;
                //logo here
                mem.textContent = "Membership: " + infos[random].mem;

                aweb.setAttribute("href", website);
                logo.setAttribute("src", logoURL);
                logo.setAttribute("alt", `${infos[random].name} logo`);

                section.className = "box";

                section.appendChild(h2);
                section.appendChild(logo);
                section.appendChild(p);
                section.appendChild(address);
                section.appendChild(aweb);
                section.appendChild(mem);

                spotlight.appendChild(section);
            }
        } else if (counter == 3) {
            counter = 3;
        }
    });
}

getData();