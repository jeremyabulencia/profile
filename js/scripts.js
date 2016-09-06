$(document).ready(function(){
	maskContWidth = $('.mask .cont').width()/2;
	maskMod(maskContWidth);
})
$(window).resize(function(){
	maskContWidth = $('.mask .cont').width()/2;
	maskMod(maskContWidth);
})
$('#socialPanel ul li').click(function(){
	href = $(this).find('a').data('href');
	window.open(href);
})
$('.mask .close').click(function(){
	$('.mask').addClass('hide');
})
$('#profilePanel').click(function(){
	if($('#profileInfo').hasClass('block')){
		$('#profileInfo').removeClass('block');
	}else{
		$('#profileInfo').addClass('block');
	}
})
function maskMod(maskContWidth){
	$('.mask .cont').css({'margin-left':'-'+maskContWidth+'px'})
}