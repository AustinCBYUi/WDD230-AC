const popup = document.querySelector("#mem-pop");

//Was going to code the timestamp, however the input should already create a timestamp?
const timest = document.querySelector("#timestamp")


//Accordion Code from W3Schools also.
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//This will be added later maybe?
// timest.addEventListener("click", () => {
//     let stamp = new Date
//     stamp.getTime();
//     alert(stamp.getTime())
// })
