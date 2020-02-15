let stockShirts;
let stockPants;
let purchaseObject;

/***********************Start validation function***************************/

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

        if (isValid && currentObject.price && typeof currentObject.price != 'number') {
            console.log(`Price should be number in ${type}`);
            isValid = false;
        }

        if (!isValid) {
            break;
        }

    }
    return isValid;
}

/***********************Start LoadStock function***************************/

function loadStock(shirts, pants) {

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
    stockShirts = shirts;
    stockPants = pants;
}

/***********************Start purchaseStock function***************************/

function purchaseStock(purchaseShirts, purchasePants, discount) {

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

    let shirtPurchasedArray = [];

    for (let i = 0; i < stockShirts.length; i++) {
        let shirtStockObject = stockShirts[i];
        // console.log(shirtStockObject.quantity);
        for (let j = 0; j < purchaseShirts.length; j++) {
            let shirtPurchaseObject = purchaseShirts[j];
            // console.log(shirtPurchaseObject);
            if (shirtStockObject.color == shirtPurchaseObject.color) {
                console.log('Shirts Colour Available');
                //console.log(shirtPurchaseObject.quantity);
                if (shirtPurchaseObject.quantity <= shirtStockObject.quantity) {
                    console.log('Shirts Quantity Available');

                    shirtPurchaseObject.price = shirtStockObject.price;
                    shirtPurchasedArray.push(shirtPurchaseObject);

                    shirtStockObject.quantity = shirtStockObject.quantity - shirtPurchaseObject.quantity;



                    stockShirts[i] = shirtStockObject;
                } else {
                    console.log('Shirts are not Available');
                    return;
                }
            } else {
                console.log('Shirts color not Available');
            }

        }
    }

    let pantsPurchasedArray = [];

    for (let i = 0; i < stockPants.length; i++) {
        let pantsStockObject = stockPants[i];

        for (let i = 0; i < purchasePants.length; i++) {
            let pantsPurchaseObject = purchasePants[i];
            // console.log(pantsPurchaseObject.color);
            if (pantsStockObject.color == pantsPurchaseObject.color) {
                console.log('Pants Color Available');
                if (pantsPurchaseObject.quantity <= pantsStockObject.quantity) {
                    console.log('Pants Quantity Available');
                    pantsPurchaseObject.price = pantsStockObject.price;
                    pantsPurchasedArray.push(pantsPurchaseObject);

                    pantsStockObject.quantity = pantsStockObject.quantity - pantsPurchaseObject.quantity;
                    //console.log(pantsStockObject.quantity);

                } else {
                    console.log('Pants are not available');
                }
            } else {
                console.log('Pants color not available');
            }
        }
    }

    //console.log(pantsPurchasedArray);
    PrintBill(shirtPurchasedArray, pantsPurchasedArray, discount);
}

/***********************Start PrintBill function***************************/

function PrintBill(shirtPurchasedArray, pantsPurchasedArray, discount) {

    let shirtsStock = 0;
    for (let i = 0; i < shirtPurchasedArray.length; i++) {
        let purchsedShirtObject = shirtPurchasedArray[i];

        console.log('Purchased Stock Of Shirts');
        console.log('Purchased Shirts:' + purchsedShirtObject.quantity);
        let shirtsPrice = purchsedShirtObject.quantity * purchsedShirtObject.price;
        console.log(`Total Shirts Price:${shirtsPrice}`);
        shirtsStock = shirtsPrice;
    }
    //console.log('total shirts ');
    //console.log(shirtsStock);

    let pantsStock = 0;
    for (let i = 0; i < pantsPurchasedArray.length; i++) {
        let purchsedPantObject = pantsPurchasedArray[i];

        console.log('Purchased Stock Of Pants');
        console.log('Purchased Pants:' + purchsedPantObject.quantity);
        let pantsPrice = purchsedPantObject.quantity * purchsedPantObject.price;
        console.log(`Total Pants Price:${pantsPrice}`);
        pantsStock += pantsPrice

    }

    let totalamount = shirtsStock + pantsStock;
    let discountAmount = (totalamount * discount) / 100;
    let payableAmount = totalamount - discountAmount;
    console.log(`Toatal Amount ${totalamount}`);
    console.log(`Discount Amount:${discountAmount}`);
    console.log(`Payable Amount:${payableAmount}`);







    console.log('Remaing Stock');

    for (let i = 0; i < stockShirts.length; i++) {
        let stockOfShirts = stockShirts[i];
        console.log('Remaining Shirts:' + stockOfShirts.quantity);
    }

    for (let j = 0; j < stockPants.length; j++) {
        let stockOfPants = stockPants[j];
        console.log('Remaining pants:' + stockOfPants.quantity);
    }

}

/***********************Start Main function***************************/

function main() {
    let shirtsLoadArray = [{
        price: 1000,
        quantity: 100,
        color: 'white'
    }];

    let pantsLoadArray = [{
        price: 1500,
        quantity: 200,
        color: 'black'
    }];


    let shirtsPurchaseArray = [{
        quantity: 50,
        color: 'white'
    }];

    let pantsPurchaseArray = [{
        quantity: 100,
        color: 'black'
    }];
    loadStock(shirtsLoadArray, pantsLoadArray);
    purchaseStock(shirtsPurchaseArray, pantsPurchaseArray, 10);
}
main();