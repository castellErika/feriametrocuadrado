$( document ).ready(function(){

	// Slider manual
	$('.carousel-manual').carousel({
		 interval: false,
	});	
	
	$('[data-toggle=tooltip]').tooltip();
	
	// Slider Inmuebles visitados
	$('.inmuebles-visitados').owlCarousel({
		navigation: true,
		pagination: false,
		  itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[751, 3],
			[975, 5],
			[1200, 5],
		  ]
	});	
	$('.inmuebles-destacados').owlCarousel({
		navigation: true,
		pagination: false,
		  itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 2],
			[1200, 2],
		  ]
	});	
	// Slider Contenido
	$('.slider-contenido-feria').owlCarousel({
		navigation: true,
		pagination: false,
		singleItem:true
	});	
});
