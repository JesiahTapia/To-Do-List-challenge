let activeList = ["Learn JavaScript", "Learn Python", "Learn CSS", "Make To Do List Site"]

let listHTML = "<ul>"; // Start an unordered list

for (let i = 0; i < activeList.length; i++) {
    listHTML += "<li>" + activeList[i] + "</li>"; // Add each item as a list item
}
listHTML += "</ul>"; 

document.getElementById("currentList").innerHTML = `<p style="color: teal"> ${listHTML} </p>`