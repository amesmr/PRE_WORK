$("#factButton").on("click", function() {
	// We generate a random number between 0 and the number of facts in the booFactArray
	var number = Math.floor((Math.random() * booFactArray.length));
	// We display the fact from the booFactArray that is in the random position we just generated.
	$("#factText").text(booFactArray[number])
})

//var booFacts = ["Boo is a pomeranian, Boo's best friend is another pomeranian named Buddy, Boo the Pomeranian was born on March 16, making him a Pisces, Boo's favourite food is grass, Boo has released two books" ]
//  This is accomplished by properly using the double quotes to define each element
var booFactArray = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books" ]

$("#textPink").on("click", function() {
	// added double quotes to pink
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})

$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})


$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})

