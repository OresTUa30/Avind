(function($) {

    $('.popup').click(function(e) {
        if (e.target.className.indexOf('js-popup-close') !== -1) {
            $(this).fadeOut();
        }
    });
	 $('.thanks').click(function(e) {
		if (e.target.className.indexOf('js-popup-close') !== -1) {
			 $(this).fadeOut();
		}
  });

    let $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
        return false;
    });

    $('.js-popup-open').on('click', function() {
        $('.popup').fadeIn();
    });

   //  $('form#send').click( function(event) { //Change
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php", //Change
	// 		data: th.serialize()
	// 		}).done(function () {
	// 			event.preventDefault(); 
	// 				function(){ 
	// 					$('.thanks').css('display', 'block') 
							
	// 		});
	// 		return false;
	// 	});
	//  });

	 $('form#send').on('submit', function(event){
		event.preventDefault();
		$('.popup').css('display', 'none');
		$('.thanks').css('display', 'block');
	});
   


})(jQuery);