// var h = document.createElement(h1);
// var myValue = document.createTextNode("Hello World!");
// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h);

var ul = document.getElementById('list');
var li;

let addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);


function addItem() {
    let input = document.getElementById('input');
    let item = input.value;

    if (item === '') {
        return false;

    } else {
        let testnode = document.createTextNode(item);
        let ul = document.getElementById('list');

        //create li
        let li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item');



        label.appendChild(testnode);
        li.appendChild(label);

        ul.appendChild(label);
        li.appendChild(checkbox);

        ul.insertBefore(li, ul.childNode[0]);
        li.className = 'visual';
    }
}

function removeItem() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])

        }
    }
}