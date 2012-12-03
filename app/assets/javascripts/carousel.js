
$(document).ready(function(){



        (function hereWeGo() { 
            var positions = {
                     front: {scale:1, left:"10%", top:"10%"},
                    };
            var boxes = [$('[data-pos="front"]')];
            
            //drop things into place (intro)
            for (var i = 0; i < boxes.length; i++) {
              TweenLite.from(boxes[i], .3, {css:{opacity:0}, delay:i * 1.1 + 0.25});
              TweenLite.fromTo(boxes[i], 1, {css:{top:"-50%"}}, {css:positions[boxes[i].attr("data-pos")], delay:i * .1 + 1.0, ease:Elastic.easeOut, immediateRender:true});
            }
          })();




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
  		






            



     
