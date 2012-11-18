

var startingItem = 0;

$(document).ready(function() {
	$('.carousel_data .carousel_item').each(function(){	
		$('#carousel').append( $(this).find('.image').html() );
	});
	createCarousel();
	showCaption();
});

function createCarousel(){
	$('div#carousel').roundabout({
		startingChild: window.startingItem,
		childSelector: 'img',
		tilt: -4.5,
		minOpacity:1,
		minScale: .4,
        maxScale: 1.1,
		duration: 1200,
		clickToFocus: true,
		clickToFocusCallback: showCaption
	});
	createCustomButtons();
}

function createCustomButtons(){
	
	$('.nextItem').click(function(){
		hideCaption();
		$('div#carousel').roundabout('animateToNextChild', showCaption);
	});
	
	$('.prevItem').click(function(){
		hideCaption();
		$('div#carousel').roundabout('animateToPreviousChild', showCaption);
	});
	
	$('div#carousel img').click(function(){
		hideCaption();
	});
}

function hideCaption(){
	$('#captions').animate({'opacity':0}, 250);
}

function showCaption(){
	var childInFocus = $('div#carousel').data('roundabout').childInFocus
	var setCaption = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();
	$('#captions').html(setCaption);
	var newHeight = $('#captions').height()+'px';
	$('.caption_container').animate({'height':newHeight}, 500, function(){
		$('#captions').animate({'opacity':1}, 250);	
	});
	
}



$(document).ready(function() {
    var controller = $.superscrollorama();
    controller.addTween('#fade', 
      TweenMax.from($('#fade'), .5, {css:{opacity:0}}));
  });







$(document).ready(function(){

  				$('.lightbox').live('click',function(){
  				  var this_lightbox = $(this).siblings("#box_content");
  				  var light_box_text = this_lightbox.html();
  				  $(".box #content").html(light_box_text);
  					$('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
  					$('.box').animate({'opacity':'1.00'}, 300, 'linear');
  					$('.backdrop, .box').css('display', 'block');
  				});

  				$('.close').click(function(){
  					close_box();
  				});

  				$('.backdrop').click(function(){
  					close_box();
  				});

  			});

  			



            function close_box()
  			{
  				$('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
  					$('.backdrop, .box').css('display', 'none');
  				});
  			}
  			


  			
  			function ScrollToBottom() {
            $('html,body').animate({
                   scrollTop: $('#btnScrollToTop').offset().top}, 2000);
            }

            function ScrollToPositionA() {
            $('html,body').animate({
                    scrollTop: $('#portfolio').offset().top}, 1000);
            }
            
            function ScrollToPositionB() {
            $('html,body').animate({
                      scrollTop: $('#about').offset().top}, 1000);
            }
           
            function ScrollToPositionC() {
            $('html,body').animate({
                  scrollTop: $('#contact').offset().top}, 1000);
            }

            function ScrollToTop() {
            $('html,body').animate({scrollTop: 0}, 1000);
            }
  		






            



     
