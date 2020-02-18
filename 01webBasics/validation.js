function myValidation() {
    let myValue = document.getElementById('myForm').value;
    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log('not valid input ');

    } else {
        console.log('This input is OK');

    }
}
alert('hi');

//form validation

document.querySelector('.myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.realname.value;

})