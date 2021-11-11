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


const getNumber = function (event) {
    let number = document.getElementById("insert-number")
    let numberChoice = number.value
    console.log(numberChoice)
}

let addNumber = document.getElementById("btn-number")
addNumber.addEventListener("click", getNumber)

const clearNumber = function (event) {
    let numberToGet = document.getElementById("insert-number")
    numberToGet.value = ""
}

let clearNumberInput = document.getElementById("btn-number")
clearNumberInput.addEventListener("click", clearNumber)

window.onload = function () {

}