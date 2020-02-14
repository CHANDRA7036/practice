let stockShirts;
let stockPants;
let stockloadShirtsobj;
let stockloadPantssobj;

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

    if (typeof shirts != 'object') {
        console.log('shirts is not a array');
        console.log('please enter  array');
        return;
    }
    if (typeof pants != 'object') {
        console.log('shirts is not a array');
        console.log('please enter  array');
        return;
    }

    stockShirts = shirts;
    stockPants = pants;



    for (let i = 0; i < stockShirts.length; i++) {
        stockloadShirtsobj = stockShirts[i];
        console.log(stockloadShirtsobj.quantity);

    }
    console.log(stockloadShirtsobj);



    for (let i = 0; i < stockPants.length; i++) {
        stockloadPantssobj = stockPants[i];
        console.log(stockloadPantssobj.quantity);

    }
    console.log(stockloadPantssobj);

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

    for (let i = 0; i < stockShirts.length; i++) {
        let currentobject = stockShirts[i];
        console.log(currentobject.quantity);

        if (purchaseShirts.color = currentobject.color) {
            console.log('shirts color  avalialable');

            if (purchaseShirts.quantity <= currentobject.quantity) {
                console.log('shirts available');

            } else {
                console.log('shirts are not available');
                return;
            }
        } else {
            console.log('shirts color not available');
        }

    }

    for (let i = 0; i < stockPants.length; i++) {
        let currentobject1 = stockPants[i];
        console.log(currentobject1.quantity);


        if (purchasePants.color = currentobject1.color) {
            console.log('pants color  avalialable');

            if (purchasePants.quantity <= currentobject1.quantity) {
                console.log('pants available');

            } else {
                console.log('pants color not available');
            }
        } else {
            console.log('pants are not available');
        }

    }

    printBill(purchaseShirts, purchasePants);

}

function printBill(shirtsParchase, pantsParchase) {

    console.log('Purchased Stock');

    console.log('purchased shirts:' + shirtsParchase.quantity);
    console.log('purchased pants:' + pantsParchase.quantity);

    console.log('Remaining quantity');

    console.log(`Remaining shirts: ${stockloadShirtsobj.quantity - shirtsParchase.quantity}`);
    console.log(`Remaining shirts: ${stockloadPantssobj.quantity - pantsParchase.quantity}`);

    console.log('Total price');

    let shirtsPrice = shirtsParchase.quantity * stockloadShirtsobj.price;
    let pantsPrice = stockloadPantssobj.quantity * pantsParchase.quantity;
    let totalPrice = shirtsPrice + pantsPrice;

    console.log(`Shirts price: ${shirtsParchase.quantity*stockloadShirtsobj.price }`);
    console.log(`Shirts price: ${stockloadPantssobj.quantity*pantsParchase.quantity}`);
    console.log(`Toatal price:${totalPrice}`);

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
        quantity: 60,
        color: 'black'
    }];

    isValidStockObject(shirtsobj);
    isValidStockObject(pantsobj);
    loadStock(shirts, pants);
    purchase(shirtsobj, pantsobj);
}
init();