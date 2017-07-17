$(function() {
	// $('.slider').glide({
	// 	arrowLeftClass: 'slider-arrow--left'
	// });

	$('.owl-carousel').owlCarousel({
		loop: true,
		smartSpeed: 700,
		responsiveClass: true,
		nav: true,
		navText: ['prev','next'],
		responsive: {
			0:{
				items: 1
			 }
		}
	});

});
