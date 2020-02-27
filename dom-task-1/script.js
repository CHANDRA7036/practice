function main(e) {
    var cname = e.parentElement.getAttribute("class");
    var a = document.querySelectorAll("." + cname);
    for (let i = 0; i < a.length; i++) {
        if (cname == "odd") {
            a[i].style.color = "red";
        } else {
            a[i].style.color = "blue";
        }
    }
    // for (let i = 0; i < a.length; i++) {
    //     if (cname == "odd") {
    //         a[i].style.color = "red";
    //     } else if(cname == "even") {
    //         a[i].style.color = "green";
    //     }
    // }
    // for (let i = 0; i < a.length; i++) {
    //     if (cname == "even") {

    //         a[i].style.color = "black";
    //     } else {
    //         a[i].style.color = "black";
    //     }
    // }
}

function resetButton() {
    var b = document.querySelectorAll("#myList li");
    // console.log(b);
    for (let j = 0; j < b.length; j++) {
        b[j].style.color = "black";
    }
}