let price;
let itemName;
let totalCost;
let quantity;

function saleInfo(){
    itemName=prompt("Entere item name here: ");
    price=prompt("Enter price here: ");
    quantity=prompt("Enter quantity here: ");

console.log(itemName, quantity, price);
calculateTaxes(totalCost, quantity);
}

saleInfo();

function calculateTaxes(price, quantity){
    let saleTax=.10;
    let totalCost=(price * quantity) * (1 + saleTax);

    console.log("Total price is: " + (totalCost));
}


