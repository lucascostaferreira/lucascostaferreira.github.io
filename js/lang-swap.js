(function ($) {

	"use strict";

	// UPDATE TEXT
	function updateText(){
		var texts_lg = texts[ $('html')[0].lang.split('-')[0] ]
		for (var text in texts_lg) {
			for (var elem of $('[text-id='+text+']')){
				if(text.split('_')[0] == 'attr'){
					elem.setAttribute(text.split('_')[1],texts_lg[text]);
					continue;
				}
				elem.innerHTML = texts_lg[text];
				if(elem.getAttribute("data-hover") != null)
					elem.setAttribute("data-hover",texts_lg[text]);
			}
		}
	}

	// LANG DETECT
	$(document).ready(function() {
		$('[text-id=year]')[0].innerHTML = (new Date()).getFullYear();

		var userLang = navigator.language || navigator.userLanguage;
		if(userLang.split('-')[0] != 'pt') {
			$('.lang-swap-icon').toggleClass('pt-BR');
			$('.lang-swap-icon').toggleClass('en');

			$('html')[0].lang = 'en';
		}
		
		updateText();
	})

	// LANG SWAP
	$('.lang-swap').click(function(){
		$('.lang-swap-icon').toggleClass('pt-BR');
		$('.lang-swap-icon').toggleClass('en');

		$('html')[0].lang = ($('html')[0].lang == 'en') ? 'pt-BR' : 'en';

		updateText();
	})

})(jQuery);
