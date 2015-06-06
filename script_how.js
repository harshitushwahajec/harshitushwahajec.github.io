$(document).ready(function(){

	var height=null;
	function scroll_up()
	{
		height = height - $(window).height();
		$('html, body').animate({scrollTop: (height)}, 800); 
		if(height<0){height=0;}
		else{$('.bounce').show();}
	}

	function scroll_down()
	{
		height = height + $(window).height();
		$('html, body').animate({scrollTop: (height)}, 800); 
		if(height>= ($(window).height()*2)){height=$(window).height()*2; $('.bounce').hide();}
		else{$('.bounce').show();}
	}

	$('.bounce').click(function(){
		scroll_down();
	});

	$(document).keydown(function(e) {
	    switch(e.which) {

	        case 38: scroll_up();
	        break;

	        case 40: scroll_down();
	        break;

	        default: return; 
	    }
	    e.preventDefault(); 
	});





});