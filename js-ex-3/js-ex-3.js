let stockShirts;
let stockPants;
let stockloadShirtsobj;
let stockloadPantsobj;
let purchaseObject;

let isLoaded = false;

function isValidStockArray(stockObjectArray, type) {

    let isValid = true;
    for (let i = 0; i < stockObjectArray.length; i++) {
        let currentObject = stockObjectArray[i];


        if (typeof currentObject != 'object') {
            console.log(`${type} is not a Object`);
            isValid = false;
        }

        if (isValid && typeof currentObject.quantity != 'number') {
            console.log(`Quantity should be number in ${type}`);
            isValid = false;
        }

        if (isValid && typeof currentObject.color != 'string') {
            console.log(`Color should be number in ${type}`);
            isValid = false;
        }

        if (isValid && typeof currentObject.price != 'number') {
            console.log(`price should be number in ${type}`);
            isValid = false;
        }
    }


    return isValid;
}


/***********************Start LoadStock function***************************/

function loadStock(shirts, pants) {
    stockShirts = shirts;
    stockPants = pants;

    if (!isValidStockArray(shirts, 'Shirts')) {
        console.log('Received invalid data for Shirts');
        isLoaded = true;
        return;
    }
    if (!isValidStockArray(pants, 'Pants')) {
        console.log('Received invalid data for Shirts');
        isLoaded = true;
        return;
    }

}
/***********************Start printBill function***************************/

function printBill(shirtsParchase, pantsParchase, discount) {

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
    let discountPrice = (totalPrice * discount) / 100
    let PayableAmount = totalPrice - discountPrice;

    console.log(`Shirts price: ${shirtsParchase.quantity*stockloadShirtsobj.price }`);
    console.log(`Shirts price: ${stockloadPantsobj.quantity*pantsParchase.quantity}`);
    console.log(`Toatal price:${totalPrice}`);
    console.log(`Discount:${discountPrice}`);
    console.log(`Payable Amount:${PayableAmount}`);





}

/***********************Start purchase function***************************/

function purchase(purchaseShirts, purchasePants, discount) {

    if (!isLoaded) {

        if (!isValidStockArray(purchaseShirts, 'purchaseShirts')) {
            console.log('Received invalid data for purchasedShirts');
            isLoaded = true;
            return;
        }
        if (!isValidStockArray(purchasePants, 'purchasePants')) {
            console.log('Received invalid data for purchasePants');
            isLoaded = true;
            return;
        }
        if (discount > 0 && discount <= 100) {

            console.log('discount valid');

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

        printBill(purchaseShirts, purchasePants, discount);
    } else {
        console.log('Issue with stock loading, Unable to process purchase');

    }
}

//***********************Start init function***************************//

function init() {
    let shirtsobj = {
        quantity: 10,
        color: 'white'
    };
    let pantsobj = {
        quantity: 30,
        color: 'black',

    };


    let shirts = [{

        price: 1000,
        quantity: 70,
        color: 'white',

    }];

    let pants = [{

        price: 700,
        quantity: 60,
        color: 'black'
    }];

    loadStock(shirts, pants);
    purchase(shirtsobj, pantsobj, 10);
}

init();