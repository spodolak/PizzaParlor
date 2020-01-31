$(document).ready(function() {

// Business Logic
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

var pizza = new Pizza();

// User Interface Logic

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
	

	function showOrder(name, toppingOne, toppingTwo, toppingThree)	{
		$("#outputOrder").html(name + ": Your " + size + " pizza with "+ toppingOne + ", " + toppingTwo + ", and " + toppingThree + " will be ready in 15 minutes. Total Due: " + cost );
	}

	$('form').submit(function(event) {
		event.preventDefault();
		name = getName();
		size = getSize();
		toppingOne = getToppingOne ();
		toppingTwo = getToppingTwo ();
		toppingThree = getToppingThree();
		pizza.AddName(name);
		pizza.AddSize(size);
		pizza.AddTopping(toppingOne);
		pizza.AddTopping(toppingTwo);
		pizza.AddTopping(toppingThree);
		cost = pizza.Cost();
		console.log(pizza);
		showOrder(name, toppingOne, toppingTwo, toppingThree, cost);
	});
});
