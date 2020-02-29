let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numbersOdd() {
    for (let i = 0; i < numbersArray.length; i++) {
        if (i % 2 == 0) {
            console.log(numbersArray[i]);
            var oddNumbers;
            if (oddNumbers) {
                oddNumbers += '<li  id="Odd" class="odd"  >' + numbersArray[i] + '</li>';
            } else {
                oddNumbers = '<li id="Odd" class="odd" >' + numbersArray[i] + '</li>';
            }
            document.getElementById("oddList").innerHTML = oddNumbers;
            document.getElementById("oddList").style.color = "red";
            document.getElementById("evenList").style.color = "black";
        }
        //  else {
        //     var evenNumbers;
        //     if (evenNumbers) {
        //         evenNumbers += '<li id="Even" class="even" style="border:2px solid green;">' + numbersArray[i] + '</li>';
        //     } else {
        //         evenNumbers = '<li id="Even" class="even" style="border:2px solid green;">' + numbersArray[i] + '</li>';
        //     }
        //     document.getElementById("evenList").innerHTML = evenNumbers;
        // }
    }
}

function numbersEven() {
    for (let i = 0; i < numbersArray.length; i++) {
        if (i % 2 != 0) {
            var evenNumbers;
            if (evenNumbers) {
                evenNumbers += '<li id="Even" class="even"  >' + numbersArray[i] + '</li>';
            } else {
                evenNumbers = '<li id="Even" class="even"  >' + numbersArray[i] + '</li>';
            }
            document.getElementById("evenList").innerHTML = evenNumbers;
            document.getElementById("evenList").style.color = "green";
            document.getElementById("oddList").style.color = "black";
        }
    }
}

function reset() {
    document.getElementById("evenList").style.color = "black";
    document.getElementById("oddList").style.color = "black";
}