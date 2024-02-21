var date = new Date;

const banner = document.querySelector("#banner");
const bannerButton = document.querySelector("#closePop");

let today = date.getDay();

//day1 = Monday, 2 Tuesday, 3 Wednesday

//Well, this doesn't work..
if (today >= 1 || today <= 3) {
    banner.classList.toggle("isTrue");
} else {
    banner.classList.toggle("isFalse");
    banner.remove();
}

bannerButton.addEventListener("click", () => {
    banner.remove();
})