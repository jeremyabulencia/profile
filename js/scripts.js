$(document).on('load',function(){

})
$(document).ready(function(){
	$('body').css({'min-height':$(window).height()})
	$('.accentBar').animate({'width':'100%'},{duration:3000})
})
$(document).scroll(function(){
	$('.banner').css({'top':$(this).scrollTop()})
})