

$(document).ready(function(){
	var num_of_items = $('.mainNav ul li').length;

	if(num_of_items > 5){
		$('.mainNav ul li').css('width',(100 / 5 - 5) + "%");
		$('.mainNav ul li:nth-child(6n)').css('clear','both');
	}
	else{
		$('.mainNav ul li').css('width',(100 / num_of_items) + "%");		
	}

});
