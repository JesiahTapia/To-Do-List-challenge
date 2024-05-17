console.log("hi");
let activeList = [
    {goal: "Learn JavaScript", onlist: true, completed: false},
    {goal: "Learn CSS", onlist: true, completed: false },
    {goal: "Learn Python", onlist: true, completed: false},
    {goal: "Enjoy Coding!", onlist: true, completed: false}
]
 
let onlist 
let completed 
let localListObj = JSON.stringify(activeList)

if(localStorage.getItem("localList")) {
    console.log("A localstorage version of the list exists");
    let localListString = localStorage.getItem("localList")
    activeList = JSON.parse(localListString)
} // replace active list object with local storage version

writeActiveToLocal = () => {
    localListObj = JSON.stringify(activeList)
    localStorage.setItem("localList", localListObj)
} // function to call the active list to be pushed to local


let listHTML = "<ul>" // Start an unordered list
for (let i = 0; i < activeList.length; i++) {
    listHTML += "<li>" + activeList[i].goal + "</li>" // Iterate through array and list "goal items" as found
}
listHTML += "</ul>" // close off list ul = unordered listed li= listed

document.getElementById("currentList").innerHTML = `<p style="color: teal"> ${listHTML} </p>` // displays currentList


addToList = () => {
let listAddition = document.getElementById("addToList").value

    // for(let i = 0; i < activeList.length; i++) {
        if (listAddition !== onlist) {
            let updatedList = { goal: listAddition, onlist: true, completed: false }
            activeList.push(updatedList)

            writeActiveToLocal()

            document.getElementById("currentList").innerHTML = `<p style="color: teal"> ${listHTML} </p>` 
            console.log(activeList);
            console.log(listHTML);

        }
    }
    // function (not finished) to add username to list



// }