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


/**
* Masque les univers exeptée le premier
**/
function hideUnivers(){
	$('#univers-ehpad, #univers-sieges, #univers-enseignement, #univers-restauration').removeClass('active').addClass('inactive');
}
//définie le timeout pour la fonction hideUnivers
var timoutID = window.setTimeout(hideUnivers, 5000)

/**
* Mention Cookie
**/

// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster
var dropCookie = true; // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14; // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie'; // Name of our cookie
var cookieValue = 'on'; // Value of cookie

function createDiv(){
var bodytag = document.getElementsByTagName('body')[0];
var div = document.createElement('div');
div.setAttribute('id','cookie-law');
div.innerHTML = '<p>En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de Cookies ou autres traceurs pour vous proposer par exemple, des publicités ciblées adaptés à vos centres d’intérêts et  réaliser des statistiques de visites. <a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span>X</span></a></p>';
// Be advised the Close Banner 'X' link requires jQuery

// bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
// or
bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag

document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible

createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}


function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	if(window.dropCookie) {
		document.cookie = name+"="+value+expires+"; path=/";
	}
}

function checkCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

window.onload = function(){
	if(checkCookie(window.cookieName) != window.cookieValue){
		createDiv();
	}
}

function removeMe(){
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
}
