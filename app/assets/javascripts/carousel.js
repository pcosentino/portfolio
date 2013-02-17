$(document).ready(function(){
  (function hereWeGo() { 
      var positions = {
         1: {scale:1, left:".5%", top:"8.1%"},
         2: {scale:1, left:"9.2%", top:"8.1%"},
         3: {scale:1, left:"18.9%", top:"8.1%"},
         4: {scale:1, left:"23.5%", top:"8.1%"},
         5: {scale:1, left:"28.2%", top:"8.1%"},
         6: {scale:1, left:"32.8%", top:"8.1%"},
         7: {scale:1, left:"42.3%", top:"8.1%"},
         8: {scale:1, left:"45.5%", top:"8.1%"},
         9: {scale:1, left:"48%", top:"8.1%"}
        };
      var boxes = [$('[data-pos="1"]'), $('[data-pos="8"]'), $('[data-pos="2"]'), $('[data-pos="4"]'), $('[data-pos="7"]'), $('[data-pos="5"]'), $('[data-pos="6"]'), $('[data-pos="3"]'), $('[data-pos="9"]'),];
      //drop things into place (intro)
      for (var i = 0; i < boxes.length; i++) {
        TweenLite.from(boxes[i], .5, {css:{opacity:0}, delay:i * .1 + .25});
        TweenLite.fromTo(boxes[i], 1, {css:{top:"-50%"}}, {css:positions[boxes[i].attr("data-pos")], delay:i * .1 + 1.5, ease:Elastic.easeOut, immediateRender:true});
      }
      $('body').css('visibility','visible');
      // slide in
      $('#title-line1').lettering();
      // TimelineLite for title animation
      (new TimelineLite())
        .from( $('#title-line1 span'), 1, {delay: 3, css:{right:'1300px'}, ease:Elastic.easeInOut})
      function initScrollAnimations() {
        $('#content-wrapper').css('display','block');
      }
    })();
});

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
            scrollTop: $('#portfolio').offset().top}, 1000, 'easeInOutCubic');
    }
    
    function ScrollToPositionB() {
    $('html,body').animate({
              scrollTop: $('#about').offset().top}, 1000, 'easeInOutCubic');
    }
   
    function ScrollToPositionC() {
    $('html,body').animate({
          scrollTop: $('#contact').offset().top}, 1000, 'easeInOutCubic');
    }

    function ScrollToTop() {
    $('html,body').animate({scrollTop: 0}, 1000, 'easeInOutCubic');
    }
