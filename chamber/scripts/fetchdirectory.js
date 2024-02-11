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

const displayData = (infos) => {
    infos.forEach((info) => {
        console.log(info.member);
        let div = document.createElement("div");

    });
}

getData();