$(function(){
	console.log($(window).width())
		$('.btn-menu').click(function(){
        $('.nav-main ul').slideToggle(500);
        }
    )
    $(window).resize(function(){
	    var x=$(window).width()
	    if(x>=1200){
	    	$(".nav-main ul").css('display', 'block');
	    }else{
	    	$(".nav-main ul").css('display', 'none');
	    }	    	    
	});
    
    $('.content ul li').hover(function() {
    	/* Stuff to do when the mouse enters the element */
    	$(this).children('.tra').children('img').css('filter','blur(3px)');
    	$(this).children('.tra').children('img').css('transform','scale(1.2)');
    	$(this).children('.tra').children('a').css('z-index', '1');
    }, function() {
    	/* Stuff to do when the mouse leaves the element */
    	$(this).children('.tra').children('img').css('filter','blur(0px)');
    	$(this).children('.tra').children('img').css('transform','scale(1)');
    	$(this).children('.tra').children('a').css('z-index', '-1');
    });
    $('html').show('2000', function() {
        $('.content li').slideDown(1000).css('display', 'block');
        $('.bg').show(500).css('display', 'block');
        $('.active').slideDown(800).css('display','block')
    });
    
})