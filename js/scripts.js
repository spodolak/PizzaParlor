$(document).ready(function() {

// Business Logic
function Pizza() {
	this.size = size, 
	this.toppings = []
}

Pizza.prototype.addTopping = function(topping) {
	this.toppings.push(topping);
}

Pizza.prototype.addSize = function(size)	{
	this.size = size;
}

// User Interface Logic

	function getName()	{
		return $("#inputted-name").val();
	}
	function getSize()	{
		return $("#size").val();
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
		$(".output").html("Hi " + name + "! Your pizza with "+ toppingOne + ", " + toppingTwo + ", and " + toppingThree + " will be ready in 15 minutes.");
	}

	$('form').submit(function(event) {
		event.preventDefault();
		name = getName();
		toppingOne = getToppingOne ();
		toppingTwo = getToppingTwo ();
		toppingThree = getToppingThree();
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