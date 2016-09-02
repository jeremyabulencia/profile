$(document).ready(function(){
	maskContWidth = $('.mask .cont').width()/2;
	maskMod(maskContWidth);
})
$(window).resize(function(){
	maskContWidth = $('.mask .cont').width()/2;
	maskMod(maskContWidth);
})
function maskMod(maskContWidth){
	$('.mask .cont').css({'margin-left':'-'+maskContWidth+'px'})
}