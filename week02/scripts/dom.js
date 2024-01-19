// - Constants - \\
//Selects the for="favchap" in the input tag of the html.
const input = document.querySelector("#favchap");

//You don't use a hashtag if it isn't an id.
const button = document.querySelector("button");

//Selects the list id in the html
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = " ❌";
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
            input.value = "";
        });
    }
});