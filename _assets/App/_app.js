/**
 * @name _app.js Application Javascript
 * @author Idea Factory (dev-team@ideafactory.fr) - Oct. 2017
 * @package _assets\App
 * @version 0.1
**/

/**
 * Mise en place Slick carousel
**/
$('#univers-bureau .slide, #univers-sieges .slide, #univers-enseignement .slide, #univers-ehpad .slide, #univers-restauration .slide ').slick({
	  infinite: true,
	  dots: true,
	  slidesToShow: 3,
	  slidesToScroll: 3
});

//$('#univers-sieges').removeClass('active').addClass('inactive');

/**
 * Affichage / Masquage des univers
**/
$('.show-univers').on('click', function() {
	// Récupère l'univers à afficher
	var univers = $(this).data('rel');
	//console.log('Univers sélectionné : ' + univers);

	// Découpe la donnée pour récupérer les éléments du DOM
	var elements = univers.split('-');
	var carousel = $('div#' + univers);

	// Masque l'univers courant
	var active = $('.univers.active');
	$(active).removeClass('active').addClass('inactive');

	// Active l'univers sélectionné
	carousel.removeClass('inactive').addClass('active');

});
