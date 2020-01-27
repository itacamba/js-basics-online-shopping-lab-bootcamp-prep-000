var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomPrice = Math.floor(Math.random() * 100) + 1;
  var newItem = {
    itemName: item,
    itemPrice: randomPrice
  }
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`
}



//
function viewCart() {
var cartAsAString = [];
if(!cart.length){
  return `Your shopping cart is empty.`;
} else if(cart.length === 1){
  return `In your cart, you have ${item.itemName} at $${item.itemPrice}.`
}
for (let i=0; i < cart.length; i++){

}
}

function total() {
  var totalSum = 0;
  // write your code here
  for (let i = 0; i < cart.length ; i++ ){
    totalSum += cart[i].itemPrice;
  }
  return totalSum;
}

function removeFromCart(item) {
  // write your code here
  var itemIndex = [];
  function returnIndex(item){
    itemIndex = cart.findIndex(x => x.itemName === item);
    return itemIndex;
  }
  if (returnIndex(item) === -1){
    return `That item is not in your cart.`;
  } else {
    cart.splice(itemIndex,1);
  }

}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return message;
  }
}
