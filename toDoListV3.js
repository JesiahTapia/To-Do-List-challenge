// Initialize the activeList from localStorage if available
let activeList = [
    {goal: "Learn JavaScript", onlist: true, completed: false},
    {goal: "Learn CSS", onlist: true, completed: false},
    {goal: "Learn Python", onlist: true, completed: false},
    {goal: "Enjoy Coding!", onlist: true, completed: false}
];

if (localStorage.getItem("localList")) {
    console.log("A localStorage version of the list exists")
    let localListString = localStorage.getItem("localList")
    activeList = JSON.parse(localListString)
}

// Function to write the activeList to localStorage
 writeActiveToLocal = () =>  {
    let localListObj = JSON.stringify(activeList)
    localStorage.setItem("localList", localListObj)
}

// Function to generate the HTML for the list
 generateListHTML = () =>  {
    let listHTML = "<ul>";
    for (let i = 0; i < activeList.length; i++) {
        listHTML += "<li>" + activeList[i].goal + "</li>"
    }
    listHTML += "</ul>"
    return listHTML
}

// Function to update the displayed list
 updateListDisplay = () => {
    document.getElementById("currentList").innerHTML = `<p style="color: teal">${generateListHTML()}</p>`
}

// Add event listener to the add form to handle submission

// Function to add an item to the list
addToList = () =>  {
    let listAddition = document.getElementById("addToList").value;
    if (listAddition.trim() !== "") {
        let updatedList = { goal: listAddition, onlist: true, completed: false };
        activeList.push(updatedList);
        writeActiveToLocal();
        updateListDisplay();
        console.log(activeList);
    }
    document.getElementById("addToList").value = "";  // Clear the input field after adding the item
}

// Initial display of the list
updateListDisplay();