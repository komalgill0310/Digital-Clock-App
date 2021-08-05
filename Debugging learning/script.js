document.getElementById("add-button").addEventListener("click", addNumbers);

function addNumbers() {
    var numberOne = getNumberOne();
    var numberTwo = getNumberTwo();

    var sum = parseInt(numberOne) + parseInt(numberTwo);
    document.getElementById("total").innerHTML = 'Total: ' + sum;
}

function getNumberOne() {
    return document.getElementById("number-1").value;
}

function getNumberTwo() {
    return document.getElementById("number-2").value;
}