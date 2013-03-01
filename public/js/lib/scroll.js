$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();

	if (scrollTop >= 100) {
		$('').stop().fadeTo('slow', 1.0);
	} else if (scrollTop < 100) {
		$('').stop().fadeTo('slow', 0.5);
	}
})