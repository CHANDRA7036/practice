// const myElement = document.querySelectorAll('.classone');
// console.log(myElement[0]);

// const myPEelements = document.querySelector('p');
// myPEelements.textContent = 'I am chandra using Js'

// const myPEelements = document.querySelectorAll('p');
// myPEelements.forEach(function(p) {
//     p.textContent = 'i am using foreach'
// })

// const myPEelements = document.querySelectorAll('p');
// myPEelements.forEach(function(p) {
//     p.remove();
// })

// Track input form

document.querySelector('#myForm').addEventListener('input', () => {
    console.log(event.target.value);

})