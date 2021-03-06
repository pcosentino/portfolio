$(document).ready(function(){
  (function hereWeGo() { 
      var positions = {
         1: {scale:1, left:"10px", top:"17.4%"},
         2: {scale:1, left:"99px", top:"16.2%"},
         3: {scale:1, left:"191px", top:"15.9%"},
         4: {scale:1, left:"235px", top:"14.5%"},
         5: {scale:1, left:"282px", top:"14.5%"},
         6: {scale:1, left:"332px", top:"16%"},
         7: {scale:1, left:"424px", top:"14.7%"},
         8: {scale:1, left:"455px", top:"14.7%"},
         9: {scale:1, left:"488px", top:"16%"}
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
           scrollTop: $('#btnScrollToTop').offset().top}, 1200, 'easeInOutQuad');
    }

    function ScrollToPositionA() {
    $('html,body').animate({
            scrollTop: $('#portfolio').offset().top}, 1200, 'easeInOutQuad');
    }
    
    function ScrollToPositionB() {
    $('html,body').animate({
              scrollTop: $('#about').offset().top}, 1200, 'easeInOutQuad');
    }
   
    function ScrollToPositionC() {
    $('html,body').animate({
          scrollTop: $('#contact').offset().top}, 1200, 'easeInOutQuad');
    }

    function ScrollToTop() {
    $('html,body').animate({scrollTop: 0}, 1200, 'easeInOutQuad');
    }

        
    // var strength1 = 40;
    // var strength2 = 110;
    // var strength3 = 80;
    // var strength4 = 200;
    // $("html").mousemove(function(e){
    //     var pageX = e.pageX - ($(window).width() / 2);
    //     var pageY = e.pageY - ($(window).height() / 2);
    //     var newvalueX = 1* pageX * -1;
    //     var newvalueY = 1* pageY * -1;
    //     $('#curve').css("background-position", (strength1 / $(window).width() * pageX * -1)+"px "+(strength1  / $(window).height() *  -1)+"px");
    //     $('#pencil').css("background-position", (strength2 / $(window).width() * pageX * -1)+"px "+(strength2  / $(window).height() * -1)+"px");
    //     $('#triangle').css("background-position", (strength3 / $(window).width() * pageX * -1)+"px "+(strength3  / $(window).height() *  -1)+"px");
    //     $('#compass').css("background-position", (strength4 / $(window).width() * pageX * -1)+"px "+(strength4  / $(window).height() * -1)+"px");
    // });

$(document).ready(function() {

  // Set up link thumbnails
  $('a.shadow').each(function(){
    var videoCaption = $(this).attr('videocaption');
    $(this).html('<div class="caption">'+videoCaption+'</div>');
  });

  $('a.shadow').hover(
    function(){
      var captionPosition = 85 - $(this).children('.caption').height();
      var iconPositionTop = captionPosition-32;
      $(this).children('.caption').animate({top:captionPosition+'px'},250);
    },
    function(){
      $(this).children('.caption').animate({top:'116px'},250);
    }
  );

});
