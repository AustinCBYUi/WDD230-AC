const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const p1 = document.querySelector("#password1");
const p2 = document.querySelector("#password2");
const message = document.querySelector("#msg");
const messagep = document.querySelector("#msgp");

p2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (p1.value !== p2.value) {
		message.textContent = "Passwords DO NOT MATCH!";
		message.style.visibility = "show";
        message.style.cssText += "background-color:red;height:50px;color:white;text-align:center;font-weight:600;";
		p2.style.backgroundColor = "#fff0f3";
		p2.value = "";
		p2.focus();
	} else {
		message.style.display = "none";
		p2.style.backgroundColor = "#fff";
		p2.style.color = "#000";
	}
}