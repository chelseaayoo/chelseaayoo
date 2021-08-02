function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
       if (name === "") {
      alert("Please enter your name");
      return false;
    } else if (email === "") {
      alert("Please enter your email adress");
      return false;
    } else {
      alert(
        name + "We value your feedback. Thank you for reaching out"
      );
    }
    event.preventDefault();
  }

  $(document).ready(function(){
    $("#checky").click(function(){
        $("#myForm").toggle("5000")
    });
});
function Results (type,size,crust,toppings) {
    this.type = type;
    this.size= size;
    this.crust= crust;
    this.toppings=toppings;
};
Results.prototype.order = function() {
    return "You have ordered..." + this.type + " pizza  with " + this.toppings + " as toppings and " + this.crust + " for crust ."
};
function TotalPrice (price,  quantity, delivery,toppings,crust) {
    this.price= price;
    this.quantity=quantity;
    this.delivery=delivery;
    this.toppings=toppings;
    this.crust=crust;
};
TotalPrice.prototype.finalTotal = function () {
    return ( this.price + this.delivery + this.toppings + this.crust )* this.quantity ;
};
var sizePrices = [1500, 1200, 750]
var priceToppings = [120,150,180,200]
var toppingsName= ["barbeque" , "mushroom" , ,"sausage", " bacon"]
var crustNames= ["crispy", "stuffed", "glutton-free"]
var crustPrices = [150,180,200]
var deliveryPrices = [0, 200];
$(document).ready(function(){
  $('form#myForm').submit(function (event) {
        event.preventDefault();
    var pizzaType = $('#type').val();
    var pizzaSize = parseInt($('#size').val());
    var pizzaToppings=parseInt($('#top').val());
    var priceCrust =parseInt($('#crusting').val());
    var pizzaTop = $('#top').val();
    var pizzaQty = parseInt($('#quantity').val());
    var pizzaPick = parseInt($('#delivery').val());
    var price = sizePrices[pizzaSize - 1];
    var DeliveryCost = deliveryPrices[pizzaPick - 1];
    var ToppingsCost = priceToppings[pizzaToppings-1];
    var crustCost = crustPrices[priceCrust-1]
    var topNames = toppingsName[pizzaTop-1]
    var crustName = crustNames[priceCrust-1]
    newOrder = new Results(pizzaType,pizzaSize, crustName,topNames,crustName);
    newTotal = new TotalPrice(price, pizzaQty, DeliveryCost,ToppingsCost,crustCost);
    if (pizzaPick===1){
        alert( newOrder.order());
        alert("YOUR TOTAL BILL IS...: " + newTotal.finalTotal());
        alert("Perfecto Pizzeria is delighted to serve your order. Welcome again." )
        }else{
            if(pizzaPick===2){
               var location= prompt("We do quick delivery. Where should we deliver your pizza?");
               var locations =["Westlands", "Ngara", "Upperhill",]
               if((location !== locations[0]) && (location !== locations[1]) && (location !== locations[2])){
                alert("Choose a location from the ones listed below...")
                alert(locations)

            }
            else  {
                prompt("Please enter your phone number for easier communication with the driver for quicker delivery.")
                alert("Your order has been received and will be delivered to " + location + "It will take approximately five minutes. An additional 100/= will be charged for delivery.");
                alert(newOrder.order());
                alert("YOUR TOTAL BILL IS NOW: " + newTotal.finalTotal());
                alert("Perfecto Pizzeria is delighted to serve you. Thanks and welcome again." )
            }
            }
        }
})
});