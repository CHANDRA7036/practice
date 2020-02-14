let stockShirts;
let stockPants;
let stockloadShirtsobj;
let stockloadPantsobj;

let isLoaded = false;

function isValidStockObject(purchaseObject) {

    let isValid = true;
    for (let i = 0; i < stockShirts.length; i++) {
        let currentObject = stockShirts[i];

        purchaseObject = currentObject;



        if (typeof purchaseObject != 'object') {
            console.log('enter object');
            isValid = false;
        }


        if (isValid && typeof purchaseObject.quantity != 'number') {
            console.log('please enter number');
            isValid = false;
        }

        if (isValid && typeof purchaseObject.color != 'string') {
            console.log('please enter string');
            isValid = false;
        }
    }
    return isValid;
}

function isvalidPurchase(purchasedObject) {
    let isValid = true;

    if (typeof purchasedObject != 'object') {
        console.log('Enter Objects only');
        isValid = false;
    }

    if (isValid && typeof purchasedObject.quantity != 'number') {
        console.log('enter name as string only');
        isValid = false;
    }

    if (isValid && typeof purchasedObject.color != 'string') {
        console.log('enter numbers only');
        isValid = false;
    }

    return isValid;
}

/***********************Start LoadStock function***************************/

function loadStock(shirts, pants) {
    stockShirts = shirts;
    stockPants = pants;

    if (!isValidStockObject(shirts)) {
        console.log('shirts is not a array');
        console.log('please enter  array');
        isLoaded = true;
        return;
    }
    if (!isValidStockObject(pants)) {
        console.log('pants is not a array');
        console.log('please enter  array');
        isLoaded = true;
        return;
    }


}
/***********************Start printBill function***************************/

function printBill(shirtsParchase, pantsParchase) {

    console.log('Purchased Stock');

    console.log('purchased shirts:' + shirtsParchase.quantity);
    console.log('purchased pants:' + pantsParchase.quantity);

    console.log('Remaining quantity');

    console.log(`Remaining shirts: ${stockloadShirtsobj.quantity - shirtsParchase.quantity}`);
    console.log(`Remaining pants: ${stockloadPantsobj.quantity - pantsParchase.quantity}`);

    console.log('Total price');

    let shirtsPrice = shirtsParchase.quantity * stockloadShirtsobj.price;
    let pantsPrice = stockloadPantsobj.quantity * pantsParchase.quantity;
    let totalPrice = shirtsPrice + pantsPrice;

    console.log(`Shirts price: ${shirtsParchase.quantity*stockloadShirtsobj.price }`);
    console.log(`Shirts price: ${stockloadPantsobj.quantity*pantsParchase.quantity}`);
    console.log(`Toatal price:${totalPrice}`);

}

/***********************Start purchase function***************************/

function purchase(purchaseShirts, purchasePants) {

    if (!isLoaded) {
        if (!isvalidPurchase(purchaseShirts)) {
            console.log('please enter  object');
            return;
        }

        if (!isvalidPurchase(purchasePants)) {
            console.log('please enter  object');
            return;
        }

        for (let i = 0; i < stockShirts.length; i++) {
            stockloadShirtsobj = stockShirts[i];
            //console.log(stockloadShirtsobj.quantity);

            if (purchaseShirts.color = stockloadShirtsobj.color) {
                console.log('shirts color  avalialable');

                if (purchaseShirts.quantity <= stockloadShirtsobj.quantity) {
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
            stockloadPantsobj = stockPants[i];

            if (purchasePants.color = stockloadPantsobj.color) {
                console.log('pants color  avalialable');

                if (purchasePants.quantity <= stockloadPantsobj.quantity) {
                    console.log('pants available');

                } else {
                    console.log('pants color not available');
                    return;
                }
            } else {
                console.log('pants are not available');
            }

        }

        printBill(purchaseShirts, purchasePants);
    } else {
        console.log('Issue with stock loading, Unable to process purchase');

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
        quantity: 70,
        color: 'white'
    }];

    let pants = [{

        price: 700,
        quantity: 60,
        color: 'black'
    }];

    loadStock(shirts, pants);
    purchase(shirtsobj, pantsobj);
}

init();