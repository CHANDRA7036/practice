let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var first = numbers[2];
for (let i = 0; i < numbers.length; i++) {
    document.write(numbers[i] + "<br/>");
    document.getElementById("demo").innerHTML = numbers[i];
}

function odd() {
    let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 == 0) {
            document.write(numbers[i] + "<br/>");
        }
    }
}

function even() {
    let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 != 0) {
            document.write(numbers[i] + "<br/>");
        }
    }
}

function reset() {
    let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    for (let i = 0; i < numbers.length; i++) {
        if (this.id == "checkTree") {
            document.write('');

        }
    }
}