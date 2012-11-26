if (document.getElementById("tag1").value==" ")
  alert("you forgot something dumbass");
else
  form.submit();


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
  		






            



     
