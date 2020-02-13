let stockShirts;
let stockPants;

/*************** validation of purchased object properties**********/

function isValidStockObject(purchaseObject) {

    let isValid = true;

    if (typeof purchaseObject != 'object') {
        console.log('enter object');
        return;
    }

    if (typeof purchaseObject.quantity != 'number') {
        console.log('please enter number');
        return;
    }

    if (typeof purchaseObject.color != 'string') {
        console.log('please enter string');
        return;
    }
    return isValid;
}

/***********************Start LoadStock function***************************/

function loadStock(shirts, pants) {


    stockShirts = shirts;
    stockPants = pants;
}

/***********************Start purchase function***************************/

function purchase(purchaseShirts, purchasePants) {

    if (typeof purchaseShirts != 'object') {
        console.log('shirts is not a array');
        console.log('please enter  array');
        return;
    }

    if (typeof purchasePants != 'object') {
        console.log('pants is not array');
        console.log('please enter  array');
        return;
    }

}


//***********************Start init function***************************//

function init() {
    let shirtsobj = {
        quantity: 20,
        color: 'white'
    };
    let pantsobj = {
        quantity: 30,
        color: 'black'
    };


    let shirts = [{

        price: 500,
        quantity: 50,
        color: 'white'
    }];

    let pants = [{

        price: 700,
        quantity: 53,
        color: 'blue'
    }];

    isValidStockObject(shirtsobj);
    isValidStockObject(pantsobj);
    loadStock(shirts, pants);
    purchase(shirtsobj, pantsobj);
}
init();