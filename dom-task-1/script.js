function main(e) {
    console.log(e);
    var cname = e.parentElement.getAttribute("class");
    var a = document.querySelectorAll("." + cname);
    for (i = 0; i < a.length; i++) {
        if (cname == "odd") {
            a[i].style.color = "red";
        } else {
            a[i].style.color = "blue";
        }
    }
    // document.querySelector("#myList").style.color = "none";
}

function myFunction() {
    document.querySelector(".myList").style.Color = "none";
}