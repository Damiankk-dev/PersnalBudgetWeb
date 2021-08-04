function showPopup(e){
var notH = 1,
	$pop = $('#popup').hover(function(){notH^=1;});

$(document).on('mousedown keydown', function( e ){
  if(notH||e.which==27) $pop.stop().fadeOut();
});
$('#cancelBtn').click(function(){
	 $pop.stop().fadeOut();
	 });
$('#confirmBtn').click(function(){
	 $pop.stop().fadeOut();
	 });

$('#popup').css({'top':window.event.pageY-400,'left':window.event.pageX-50, 'position':'absolute'});
$pop.stop().fadeIn(); 

}