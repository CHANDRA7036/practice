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

    let stockloadShirts;

    for (let i = 0; i < stockShirts.length; i++) {
        stockloadShirtsobj = stockShirts[i];
        console.log(stockloadShirtsobj.quantity);
        stockloadShirts = stockloadShirtsobj;
    }
    console.log(stockloadShirts);

    let stockloadPants;

    for (let i = 0; i < stockPants.length; i++) {
        stockloadPantssobj = stockPants[i];
        console.log(stockloadPantssobj.quantity);
        stockloadPants = stockloadPantssobj;
    }
    console.log(stockloadPants);

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


    let displayShirtsObject;

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
        displayShirtsObject = purchaseShirts;
        console.log(displayShirtsObject);


    }

    let displayPantsObject;

    for (let i = 0; i < stockPants.length; i++) {
        let currentobject = stockPants[i];
        console.log(currentobject.quantity);


        if (purchasePants.color = currentobject.color) {
            console.log('pants color  avalialable');

            if (purchasePants.quantity <= currentobject.quantity) {
                console.log('pants available');

            } else {
                console.log('pants color not available');
            }
        } else {
            console.log('pants are not available');
        }
        displayPantsObject;
        console.log(displayPantsObject);

    }

    printBill(displayShirtsObject, displayPantsObject);

}

function printBill(shirtsParchase, pantsParchase) {

    console.log('Purchased Stock');
    // console.log('purchased shirts:' + shirtsParchase.quantity);
    // console.log('purchased pants:' + pantsParchased.quantity);

    console.log('Remaining quantity');
    //console.log(`remaining stock ${stockloadPants.quantity-purchasedShirts}`);

    console.log(`Remaining shirts: ${stockloadShirtsobj.quantity - shirtsParchase.quantity}`);
    // console.log(`Remaining shirts: ${stockloadPantssobj.quantity - pantsParchase.quantity}`);




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
        quantity: 35,
        color: 'black'
    }];

    isValidStockObject(shirtsobj);
    isValidStockObject(pantsobj);
    loadStock(shirts, pants);
    purchase(shirtsobj, pantsobj);
}
init();