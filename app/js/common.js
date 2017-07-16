$(function() {
	// $('.slider').glide({
	// 	arrowLeftClass: 'slider-arrow--left'
	// });

	$('.carousel-top').owlCarousel({
		loop: true,
		smartSpeed: 700,
		responsiveClass: true,
		nav: true,
		navText: ['prev','<i class="right-slide"></i>'],
		responsive: {
			0:{
				items: 1
			 }
		}
	});

});
