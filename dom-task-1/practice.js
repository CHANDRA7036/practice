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

alert('connected');

function main(this) {

    var cname = this.document.getElementsByClassName(".odd");
    //var cname = this.odd;
    let a = document.querySelector(cname);
    document.write(a);

}


// <!DOCTYPE html>
// <html>
// <head>
// <style>
// .even {
//   border: 1px solid black;
//   margin: 5px;
// }
// </style>
// </head>
// <body>


//  <ul id="myList">
//       <li class="odd"><a onclick="main(this)">one</a></li>
//      <li class="even"><a onclick="main(this)">two</a></li>
//       <li class="odd"><a onclick="main(this)">tree</a></li>
//       <li class="even"><a onclick="main(this)">two</a></li>
//   </ul>
// <p class="odd">This is a p element with class="example".</p>

// <p>This is a <span class="odd">span</span> element with class="example" inside another p element.</p>

// <p>Click the button to change the background color of all elements with class="example".</p>

// <button class="example" onclick="myFunction()">Try it</button>
// <button class="example" onclick="myFunctionTwo()">Try it</button>

// <p><strong>Note:</strong> The getElementsByClassName() method is not supported in Internet Explorer 8 and earlier versions.</p>

// <script>
// function myFunction() {
//   var x = document.getElementsByClassName("even");

//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.backgroundColor = "red";
//   }
// }
// function myFunctionTwo() {
//   var y = document.getElementsByClassName("odd");

//   var i;
//   for (i = 0; i < y.length; i++) {
//     y[i].style.backgroundColor = "green";
//   }
// }
// </script>

// </body>
// </html>