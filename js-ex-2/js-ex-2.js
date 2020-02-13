let stockShirts;
let stockPants;
let stockShoes;

/***********************Start LoadStock function***************************/

let isLoaded = false;

function loadStock(shirts, pants, shoes) {

    if (typeof shirts != 'object') {
        console.log('shirts is not a object');
        console.log('please enter  object');
        isLoaded = true;

        return;
    }

    if (typeof pants != 'object') {
        console.log('pants is not object');
        console.log('please enter  object');
        isLoaded = true;
        return;
    }

    if (typeof shoes != 'object') {
        console.log('shoes is not a object');
        console.log('please enter  object');
        return;
    }

    stockShirts = shirts;
    stockPants = pants;
    stockShoes = shoes;
}

/***********************end LoadStock function***************************/


/***********************Start purchase function***************************/

function purchase(shirts, pants, shoes, discount) {

    if (typeof discount != 'number') {
        console.log('please enter number');
        return;
    }

    if (shirts <= stockShirts.quantity) {
        console.log('shirts are available');
    } else {
        console.log('shirts are not available');
        return;
    }

    if (pants <= stockPants.quantity) {
        console.log('pants are available');
    } else {
        console.log('pants are not available');
        return;
    }

    if (shoes <= stockShoes.quantity) {
        console.log('shoes are available');
    } else {
        console.log('shoes are not available');
        return;
    }

    if (discount > 0 && discount <= 100) {

        console.log('discount valid');

    }

    printBill(shirts, pants, shoes, discount);
}

/***********************End purchase function***************************/

/***********************Start printBill function***************************/

function printBill(purchasedShirts, purchasedPants, purchasedShoes, discount) {

    console.log('Purchased Stock');
    console.log('Shirts:' + purchasedShirts);
    console.log('pants:' + purchasedPants);
    console.log('Shoes:' + purchasedShoes);

    console.log('Remining Stock');
    console.log(`remaining stock ${stockShirts.quantity-purchasedShirts}`);
    console.log(`remaining stock ${stockPants.quantity-purchasedPants}`);
    console.log(`remaining stock ${stockShoes.quantity-purchasedShoes}`);

    console.log('total price');

    let shirtsPrice = purchasedShirts * stockShirts.price;
    let pantsPrice = purchasedPants * stockPants.price;
    let shoesPrice = purchasedShoes * stockShoes.price;
    let totalPrice = shirtsPrice + pantsPrice + shoesPrice;
    let discountPrice = totalPrice * discount / 100;

    console.log(`shirts price ${purchasedShirts * stockShirts.price}`);
    console.log(`pants price ${purchasedPants * stockPants.price}`);
    console.log(`shoes price ${purchasedShoes * stockShoes.price}`);
    console.log(`toatal price:${shirtsPrice + pantsPrice + shoesPrice}`);
    console.log(`discount:${totalPrice*discount/100}`);
    console.log(`payable Amount ${totalPrice-discountPrice}`);

}

/***********************Start end printBill function***************************/

/***********************Execution starts here***************************/

function init() {
    let shirts = {
        name: 'shirts',
        price: 500,
        quantity: 150
    };

    let pants = {
        name: 'pants',
        price: 700,
        quantity: 250
    };

    let shoes = {
        name: 'shoes',
        price: 1000,
        quantity: 50
    };

    loadStock(shirts, pants, shoes);
    purchase(50, 150, 15, 10);

}


init();