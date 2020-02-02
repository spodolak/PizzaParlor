$(document).ready(function() {

// BUSINESS LOGIC
//Orders Object and Prototypes
function Order() {
	this.orders = []
}
Order.prototype.addPizza = function(pizza)	{
	this.orders.push(pizza);
}

//Pizza Object and Prototypes
function Pizza() {
	this.name = name,
	this.size = size,
	this.toppings = [], 
	this.cost = 0
}
Pizza.prototype.addName = function(name) {
	this.name = name ;
}
Pizza.prototype.addSize = function(size)	{  
	this.size = size;
}
Pizza.prototype.addTopping = function(topping) {
	this.toppings.push(topping);
}
Pizza.prototype.addCost = function() {
	if (this.size === "small") {
		return this.cost = 10;
	} else if (this.size === "medium") {
		return this.cost = 14;
	} else {
		return this.cost = 18;
	}
}

function showOrders()	{
	var htmlForOrders = "";
	order.orders.forEach(function()	{
		htmlForOrders += "<li>" + this.name + "</li>";
		console.log(this);
	});
	$("ul#open-orders-list").html(htmlForOrders);
}


//Global variables to serve as database placeholders
var order = new Order();

// USER INTERFACE LOGIC
	function getName()	{
		var name = $("#inputted-name").val();
		$("#inputted-name").val("");
		return name;
	}
	function getSize()	{
		var size = $("select#size-choice").val();
		$("select#size-choice").val("");
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
	function showOrder(pizza)	{
		$("#order-name").text(pizza.name);
		$("#size").html(pizza.size);
		$("#output-toppings").text(pizza.toppings.join(', '));
		$("#cost").text(pizza.cost);
	}
	
	// Button Functions
	$("form#order-input").submit(function(event) {
		event.preventDefault();
		var pizza = new Pizza();
		pizza.addName(getName());
		pizza.addSize(getSize());
		pizza.addTopping(getToppingOne());
		pizza.addTopping(getToppingTwo());
		pizza.addTopping(getToppingThree());
		cost = pizza.addCost();
		order.addPizza(pizza);
		$(".order-again").toggle();
		$(".order-input").toggle();
		$("div").removeClass("order-output");
		console.log(order);
		showOrder(pizza);
	});

	$("form#yes-reorder").submit(function(event)	{
		event.preventDefault();
		$(".order-input").toggle();
		$(".order-again").toggle();
		showOrders(order);
		
	});
	$("form#no-reorder").submit(function(event)	{
		
	});
});


