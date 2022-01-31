var header = document.getElementsByTagName('header')[0];
var inputField = document.getElementsByClassName("inputField")[0];
var input = document.getElementsByClassName("hijrah")[0];
var input2 = document.getElementsByClassName("masihi")[0];
var button = inputField.getElementsByTagName('button')[0];
var convert = document.getElementsByClassName("lastPage")[0].getElementsByTagName('button')[0];
let switchingThePosition = false

convert.addEventListener('click', function() {
    // get values of input and input2
    var inputValue = Math.floor(parseInt(input.value));
    // get id of input
    if (input.id == "hijrah") {
        input2.value = inputValue + 579
    } else if (input.id == "masihi") {
        input2.value = inputValue - 579
    }
})

button.addEventListener('click', function() {
    if (switchingThePosition == false) {
        input.className = "masihi";
        input.placeholder = "Masihi Year";
        input.value = ""
        input.id = "masihi";
        input2.className = "hijrah";
        input2.placeholder = "Hijrah Year";
        input2.value = ""
        header.innerHTML = "Masihi to Hijrah"
        switchingThePosition = true
    } else if (switchingThePosition == true) {
        input.className = "hijrah";
        input.placeholder = "Hijrah Year";
        input.value = ""
        input.id = "hijrah";
        input2.className = "masihi";
        input2.placeholder = "Masihi Year";
        input2.value = ""
        header.innerHTML = "Hijrah to Masihi"
        switchingThePosition = false
    }
})