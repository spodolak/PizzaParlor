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
		var name = $("#inputted-name").val();
		$("#inputted-name").val("");
		return name;
	}
	function getSize()	{
		var size = $("select#size").val();
		$("select#size").val("");
		return size;
	}
	function getToppingOne()	{
		var toppingOne = $("select#topping-1").val();
		$("select#topping-1").val("");
		return toppingOne;  
	}
	function getToppingTwo()	{
		var toppingTwo = $("select#topping-2").val();
		$("select#topping-2").val("");
		return toppingTwo;
	}
	function getToppingThree()	{
		var toppingThree = $("select#topping-3").val();
		$("select#topping-3").val("");
		return toppingThree;
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


		$(".order-again").toggle();
		$(".order-input").toggle();
		$("div").removeClass("order-output");
		showOrder();
	});

	$("form#yes-reorder").submit(function(event)	{
		event.preventDefault();
		$(".order-input").toggle();
		$(".order-again").toggle();

	});
	$("form#order-output").submit(function(event)	{

	});
});


