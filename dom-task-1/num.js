// function init(){}
function OddNum() {
    // let a = document.querySelector("#myList.li");
    // console.log(a);
    let a = document.getElementsByClassName("odd");
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = "red";
    }
    let b = document.getElementsByClassName("even");
    for (let j = 0; j < b.length; j++) {
        b[j].style.color = "black";
    }
}

function EvenNum() {
    let b = document.getElementsByClassName("even");
    for (let j = 0; j < b.length; j++) {
        b[j].style.color = "green";
    }
    let a = document.getElementsByClassName("odd");
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = "black";
    }
}

function resetButton() {
    // var c = document.querySelectorAll("#myList li");   
    // for (let j = 0; j < c.length; j++) {
    //     c[j].style.color = "black";
    // }
    let b = document.getElementsByClassName("even");
    for (let j = 0; j < b.length; j++) {
        b[j].style.color = "black";
    }
    let a = document.getElementsByClassName("odd");
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = "black";
    }
}