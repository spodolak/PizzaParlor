$(document).ready(function() {

// Business Logic
function Pizza() {
	this.name = name,
	this.size = size
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
	if (this.size = "small") {
		return this.cost = 10;
	} else if (this.size = "medium") {
		return this.cost = 14;
	} else {
		return this.cost = 18;
	}
}

var pizza = new Pizza();

// User Interface Logic

	function getName()	{
		return $("#inputted-name").val();
	}
	function getSize()	{
		var size = parseInt($("select#size").val());
		console.log(size);
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
	

	function showOrder(name, toppingOne, toppingTwo, toppingThree)	{
		$(".output").html("Hi " + name + "! Your " + size + " pizza with "+ toppingOne + ", " + toppingTwo + ", and " + toppingThree + " will be ready in 15 minutes.");
	}

	$('form').submit(function(event) {
		event.preventDefault();
		name = getName();
		size = getSize();
		console.log(size);
		toppingOne = getToppingOne ();
		toppingTwo = getToppingTwo ();
		toppingThree = getToppingThree();
		pizza.AddName(name);
		pizza.AddSize(size);
		pizza.AddTopping(toppingOne);
		pizza.AddTopping(toppingTwo);
		pizza.AddTopping(toppingThree);
		pizza.Cost();
		showOrder(name, toppingOne, toppingTwo, toppingThree);
	});
});


// function getOrderPrintOrder()	{
// 	var name = $("#inputted-name").val();
// 	var size = $("#size").val();
// 	var toppingOne = $("select#topping-1").val();
// 	var toppingTwo = $("select#topping-2").val();
// 	var toppingThree = $("select#topping-3").val();

// 	$(".output").html("Hi " + name + "! Your pizza with "+ toppingOne + ", " + toppingTwo + ", and " + toppingThree + " will be ready in 15 minutes.");
// }

// $('form').submit(function(event) {
// 	event.preventDefault();
// 	getOrderPrintOrder();
// });