$("#button1").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

$("#button2").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})

$("#button3").on("click", function() {
	$("#box").css("background-color","blue");
})

$("#button4").on("click", function() {
	$("#box").css("background-color", "red");
})

$("#button5").on("click", function() {
	$("#box").css("opacity","-=0.1");
})

$("#button6").on("click", function() {
	$("#box").css("height","150px");
	$("#box").css("width","150px");
	$("#box").css("background-color","orange");
	$("#box").css("margin","25px");
})

