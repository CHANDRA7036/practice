// var h = document.createElement(h1);
// var myValue = document.createTextNode("Hello World!");
// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h);


function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var testnode = document.createTextNode(item)

    if (item === '') {
        return false;

    } else {
        //create li 

        li = document.createElement('li')

        //create checkbox

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label

        var label = document.createElement('label');
        label.setAttribute('for', 'item');

        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(testnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNode[0]);
        li.className = 'visual';
    }
}