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
