alert('connected');

function myFunctionOne() {
    var x = document.getElementsByClassName("even");

    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";

    }
}

function myFunctionTwo() {
    var y = document.getElementsByClassName("odd");

    var j;
    for (j = 0; j < y.length; j++) {
        y[j].style.backgroundColor = "green";

    }
}

function myFunctionThree() {
    document.write("");
}