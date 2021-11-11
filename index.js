const addNamesToList = function (event) {
    let nameToGet = document.getElementById("insert-name")
    let nameToList = nameToGet.value
    let listDiv = document.getElementById("waiting-list")
    let newNameToAdd = document.createElement("div")
    listDiv.appendChild(newNameToAdd)
    listDiv.innerHTML = listDiv.innerHTML + nameToList
    
}

let addNameClick = document.getElementById("btn-add")
addNameClick.addEventListener("click", addNamesToList)

window.onload = function () {

}