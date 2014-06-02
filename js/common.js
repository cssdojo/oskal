head.ready(function() {
	console.log("These aren't the droids you're looking for!");

	$('.js-fancybox').fancybox({
		padding: 0,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	$(' .js-masonry ').masonry({
		itemSelector: '.item',
		singleMode: false,
		isResizable: false
	});

	$('.js-slider').each(function(){
		var p = this.parentNode;
		$(this).cycle({
			fx: "scrollHorz",
			autoHeight: "container",
			timeout:  0,
			carouselVisible: 3,
			slideActiveClass: "is-active",
			pagerActiveClass: "is-active",
			disabledClass: "is-disabled",
			slideClass: "testimonials__slide",
			allowWrap: true,
			carouselFluid: "true",
			slides: $('.testimonials__slide', p),
			prev:   $('.testimonials__prev', p),
			next:   $('.testimonials__next', p),
			pager: ".testimonials__pager",
			pagerTemplate: "<span>•</span>"
		});
	});

});