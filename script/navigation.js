$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

document.cookie = "promo_shown=1; Max-Age=2600000; SameSite=None; Secure"