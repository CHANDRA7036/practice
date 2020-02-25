function main(e) {
    console.log(e);

    // var x = e.odd;
    var cname = e.getAttribute('class')
    document.querySelector(cname);
    console.log();


    for (i = 0; i < e.length; i++) {
        e[i].style.backgroundColor = "green";
    }
}



// function main(e) {
//       var x = document.getElementsByClassName("odd");

//       var i;
//       for (i = 0; i < x.length; i++) {
//         y[i].style.backgroundColor = "green";
//       }
//     }