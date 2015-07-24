var SPEED = 500; 				// Fade speed.
var AUTO_SWITCH_SPEED = 4000;	// AutoSwitch speed.

// Performs Content Slider Initialization.
function setup() {
	// Add initial active class.
	$(".slide").first().addClass("active");

	// Hide slides.
	$(".slide").hide();

	// Show active class.
	$(".active").show();
}

// Moves to the next or previous slide based on the moveNext boolean value.
function next(moveNext) {
	$(".active").removeClass("active").addClass("oldActive");
	
	if (moveNext) {
		if ($(".oldActive").is(":last-child")) {
			$(".slide").first().addClass("active");	
		} else {
			$(".oldActive").next().addClass("active");
		}
	} else {
		if ($(".oldActive").is(":first-child")) {
			$(".slide").last().addClass("active");
		} else {
			$(".oldActive").prev().addClass("active");
		}
	}
	
	$(".oldActive").removeClass("oldActive");
	$(".slide").fadeOut(SPEED);
	$(".active").fadeIn(SPEED);
}

// jQuery Code Handling.
$(document).ready(function() {
	// Variables.
	var autoSwitch = true; 

	setup();

	if (autoSwitch) {
		setInterval(function() {
			next(true);
		}, AUTO_SWITCH_SPEED);
	}

	// Arrow event.
	$("#next").on("click", function() {
		next(true);
	})

	$("#prev").on("click", function() {
		next(false);
	})
})