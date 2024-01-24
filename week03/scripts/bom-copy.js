// - Constants - \\
//Selects the for="favchap" in the input tag of the html.
const input = document.querySelector("#favchap");

//You don't use a hashtag if it isn't an id.
const button = document.querySelector("button");

//Selects the list id in the html
const list = document.querySelector("#list");


let chaptersArray = getChapterList() || [];



chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});


function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = " ❌";
    deleteButton.classList.add("delete");
    li.append(deleteButton);
    list.append(li);

    //Missed this getting turned into a function, had it as a pointer originally?
    //Also, looking at the example, If that console.log slips into a students assignment
    //because they're copy-paste-coders I would be baffled!
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}


//This creates a cache
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}


function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}


function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    console.log("You deleted " + chapter);
    setChapterList();
}