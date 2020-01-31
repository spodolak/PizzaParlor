$(document).ready(function() {

// BUSINESS LOGIC
//Orders Object and Prototypes
function Order() {
	this.orders = []
}
Order.prototype.AddPizza = function(pizza)	{
	this.orders.push(pizza);
}

//Pizza Object and Prototypes
function Pizza() {
	this.name = name,
	this.size = size,
	this.toppings = [], 
	this.cost = 0
}
Pizza.prototype.AddName = function(name) {
	this.name = name ;
}
Pizza.prototype.AddSize = function(size)	{  
	this.size = size;
}
Pizza.prototype.AddTopping = function(topping) {
	this.toppings.push(topping);
}
Pizza.prototype.Cost = function() {
	if (this.size === "small") {
		return this.cost = 10;
	} else if (this.size === "medium") {
		return this.cost = 14;
	} else {
		return this.cost = 18;
	}
}

//Global variables to serve as placeholder databases
var order = new Order();
var pizza = new Pizza();

// USER INTERFACE LOGIC
	function getName()	{
		return $("#inputted-name").val();
	}
	function getSize()	{
		return $("select#size").val();
	}
	function getToppingOne()	{
		return $("select#topping-1").val();
	}
	function getToppingTwo()	{
		return $("select#topping-2").val();
	}
	function getToppingThree()	{
		return $("select#topping-3").val();
	}
	
	function showOrder()	{
		$("#order-name").text(pizza.name);
		$("#size").html(pizza.size);
		$("#output-toppings").text(pizza.toppings.join(', '));
		$("#cost").text(pizza.cost);
	}

	$("form#order-input").submit(function(event) {
		event.preventDefault();
		pizza.AddName(getName());
		pizza.AddSize(getSize());
		pizza.AddTopping(getToppingOne());
		pizza.AddTopping(getToppingTwo());
		pizza.AddTopping(getToppingThree());
		cost = pizza.Cost();
		order.AddPizza(pizza);
		console.log(order);
		$("div").removeClass("order-output");
		$(".order-input").toggle();
		showOrder();
	});
});
