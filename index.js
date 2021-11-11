const addNamesToList = function (event) {
    let nameToGet = document.getElementById("insert-name")
    let nameToList = nameToGet.value
    let listDiv = document.getElementById("waiting-list")
    let newNameToAdd = document.createElement("div")
    listDiv.appendChild(newNameToAdd)
    listDiv.innerHTML = listDiv.innerHTML + nameToList
    nameToGet.innerHTML=""  
}

let addNameClick = document.getElementById("btn-add")
addNameClick.addEventListener("click", addNamesToList)

const clearName = function (event) {
    let nameToGet = document.getElementById("insert-name")
    nameToGet.value = ""
}

let clearInput = document.getElementById("btn-add")
clearInput.addEventListener("click", clearName)

window.onload = function () {

}