
$(document).ready(function(){



        (function hereWeGo() { 
            var positions = {
                     1: {scale:1, left:".5%", top:"6%"},
                     2: {scale:1, left:"9.2%", top:"6%"},
                     3: {scale:1, left:"18.9%", top:"6%"},
                     4: {scale:1, left:"23.5%", top:"6%"},
                     5: {scale:1, left:"28.2%", top:"6%"},
                     6: {scale:1, left:"32.8%", top:"6%"},
                     7: {scale:1, left:"42.3%", top:"6%"},
                     8: {scale:1, left:"45.5%", top:"6%"},
                     9: {scale:1, left:"48%", top:"6%"}
                    };
            var boxes = [$('[data-pos="1"]'), $('[data-pos="8"]'), $('[data-pos="2"]'), $('[data-pos="4"]'), $('[data-pos="7"]'), $('[data-pos="5"]'), $('[data-pos="6"]'),  $('[data-pos="9"]'), $('[data-pos="3"]'),];
            
            //drop things into place (intro)
            for (var i = 0; i < boxes.length; i++) {
              TweenLite.from(boxes[i], .3, {css:{opacity:0}, delay:i * .1 + .25});
              TweenLite.fromTo(boxes[i], 1, {css:{top:"-50%"}}, {css:positions[boxes[i].attr("data-pos")], delay:i * .2 + .25, ease:Elastic.easeOut, immediateRender:true});
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
  		






            



     
