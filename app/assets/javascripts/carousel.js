// JavaScript Document
// Written by Chris Converse for lynda.com


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
		minScale: .45,
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
  		














window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();
 
function getRandTheta(){
    return Math.random() * 2 * Math.PI;
}
 
function updateSnake(canvas, snake){
    var maxVariance = 0.2;
    var snakeSpeed = 200; //px / s
    var segmentsPerSecond = snakeSpeed / snake.segmentLength;
    var segments = snake.segments;
    var date = new Date();
    var time = date.getTime();
    var timeDiff = (time - snake.lastUpdateTime);
    if (timeDiff > 1000 / segmentsPerSecond) {
        var head = segments[segments.length - 1];
        var neck = segments[segments.length - 2];
 
        var direction = snake.direction;
        var newHeadX = head.x + direction.x * snake.segmentLength;
        var newHeadY = head.y + direction.y * snake.segmentLength;
 
        // change direction if collision occurs
        if (newHeadX > canvas.width || newHeadX < 0) {
            direction.x *= -1;
        }
        if (newHeadY > canvas.height || newHeadY < 0) {
            direction.y *= -1;
        }
 
        // add new segment
        segments.push({
            x: newHeadX,
            y: newHeadY
        });
 
        if (segments.length > snake.numSegments) {
            segments.shift();
        }
 
        var variance = ((maxVariance / 2) - Math.random() * maxVariance);
 
        direction.x += variance;
        direction.y -= variance;
 
        // update direction vector
        if (direction.x > 1) {
            direction.x = 1;
        }
        if (direction.x < -1) {
            direction.x = -1;
        }
 
        // dampering - try to keep direction vectors around -0.5 and +0.5
        direction.x *= Math.abs(direction.x) > 0.5 ? (1 - 0.01) : (1 + 0.01);
        direction.y *= Math.abs(direction.y) > 0.5 ? (1 - 0.01) : (1 + 0.01);
 
        snake.lastUpdateTime = time;
    }
}
 
function animate(canvas, snake){
    var context = canvas.getContext("2d");
 
    // update
    updateSnake(canvas, snake);
 
    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);
 
    // draw
    drawSnake(context, snake);
 
    // request new frame
    requestAnimFrame(function(){
        animate(canvas, snake);
    });
}
 
function drawSnake(context, snake){
    var segments = snake.segments;
    var tail = segments[0];
    context.beginPath();
    context.moveTo(tail.x, tail.y);
 
    for (var n = 1; n < segments.length; n++) {
        var segment = segments[n];
        context.lineTo(segment.x, segment.y);
    }
 
    context.lineWidth = 20;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = "blue";
    context.stroke();
}
 
window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var segmentLength = 2; // px
    var headX = canvas.width / 2;
    var headY = canvas.height / 2;
 
    snake = {
        segmentLength: 5,
        lastUpdateTime: 0,
        numSegments: 50,
        // moving to the right
        direction: {
            x: 1,
            y: 0
        },
        segments: [{
            // tail
            x: headX + segmentLength,
            y: headY
        }, {
            // head
            x: headX,
            y: headY
        }]
    };
 
    animate(canvas, snake);
};

