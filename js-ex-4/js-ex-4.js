let stockShirts;
let stockPants;
let purchaseObject;

function isValidStockObject(purchaseObject) {

    let isValid = true;

    for (let i = 0; i < stockPants.length; i++) {
        let currentObject = stockShirts[i];
        purchaseObject = currentObject;

    }
    for (let i = 0; i < stockShirts.length; i++) {
        let currentObject = stockShirts[i];
        purchaseObject = currentObject;


        if (typeof purchaseObject != 'object') {
            console.log('enter object');
            isValid = false;
            return;
        }

        if (isValid && typeof purchaseObject.quantity != 'number') {
            console.log('please enter number');
            isValid = false;
            return;

        }

        if (isValid && typeof purchaseObject.color != 'string') {
            console.log('please enter string');
            isValid = false;
            return;

        }
        if (isValid && typeof purchaseObject.price != 'number') {
            console.log('please enter string');
            isValid = false;
            return;
        }

    }
    return isValid;

}

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







function purchaseStock(purchaseShirts, purchasePants) {

    if (!isValidStockObject(purchaseShirts)) {
        console.log('please enter  object');
        return;
    }

    if (!isValidStockObject(purchasePants)) {
        console.log('please enter  object');
        return;
    }

    for (let i = 0; i < stockShirts.length; i++) {
        let currentObject = stockShirts[i];
        console.log(currentObject.quantity);
        for (let i = 0; i < purchaseShirts.length; i++) {
            let currentObject1 = purchaseShirts[i];
            console.log(currentObject1);
            if (currentObject.color == currentObject1.color) {
                console.log('colour matched');
                console.log(currentObject1.quantity);
                if (currentObject1.quantity <= currentObject.quantity) {
                    console.log('shirts available');

                } else {
                    console.log('shirts are not available');
                    return;
                }
            } else {
                console.log('shirts color not available');
            }



        }


    }


}

function main() {
    let shirtsLoadArray = [{
        price: 500,
        quantity: 100,
        color: 'white'
    }];

    let pantsLoadArray = [{
        price: 1000,
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
    purchaseStock(shirtsPurchaseArray, pantsPurchaseArray)
}
main();