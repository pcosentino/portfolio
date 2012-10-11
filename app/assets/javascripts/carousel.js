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
  		
















      // canvas art	
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
 
function initBalls(){
    balls = [];
 
    var blue = "#3A5BCD";
    var red = "#EF2B36";
    var yellow = "#FFC636";
    var green = "#02A817";
 
    ////////////////////// w ///////////////////////////
    balls.push(new Ball(65, 150, 0, 0, blue));
    balls.push(new Ball(70, 170, 0, 0, blue));
    balls.push(new Ball(75, 190, 0, 0, blue));
    balls.push(new Ball(80, 210, 0, 0, blue));
    balls.push(new Ball(85, 230, 0, 0, blue));
    balls.push(new Ball(90, 250, 0, 0, blue));
    balls.push(new Ball(95, 270, 0, 0, blue));
    balls.push(new Ball(100, 290, 0, 0, blue));
    balls.push(new Ball(105, 310, 0, 0, blue));
  

    balls.push(new Ball(145, 230, 0, 0, blue));
    balls.push(new Ball(140, 250, 0, 0, blue));
    balls.push(new Ball(135, 270, 0, 0, blue));
    balls.push(new Ball(130, 290, 0, 0, blue));
    balls.push(new Ball(125, 310, 0, 0, blue));

    balls.push(new Ball(160, 230, 0, 0, blue));
    balls.push(new Ball(165, 250, 0, 0, blue));
    balls.push(new Ball(170, 270, 0, 0, blue));
    balls.push(new Ball(175, 290, 0, 0, blue));
    balls.push(new Ball(180, 310, 0, 0, blue));


    balls.push(new Ball(240, 150, 0, 0, blue));
    balls.push(new Ball(235, 170, 0, 0, blue));
    balls.push(new Ball(230, 190, 0, 0, blue));
    balls.push(new Ball(225, 210, 0, 0, blue));
    balls.push(new Ball(220, 230, 0, 0, blue));
    balls.push(new Ball(215, 250, 0, 0, blue));
    balls.push(new Ball(210, 270, 0, 0, blue));
    balls.push(new Ball(205, 290, 0, 0, blue));
    balls.push(new Ball(200, 310, 0, 0, blue));



    balls.push(new Ball(65, 160, 0, 0, blue));
    balls.push(new Ball(72, 180, 0, 0, blue));
    balls.push(new Ball(75, 200, 0, 0, blue));
    balls.push(new Ball(85, 220, 0, 0, blue));
    balls.push(new Ball(85, 240, 0, 0, blue));
    balls.push(new Ball(90, 260, 0, 0, blue));
    balls.push(new Ball(95, 280, 0, 0, blue));
    balls.push(new Ball(100, 300, 0, 0, blue));

    balls.push(new Ball(115, 315, 0, 0, blue));
    balls.push(new Ball(145, 240, 0, 0, blue));
    balls.push(new Ball(140, 260, 0, 0, blue));
    balls.push(new Ball(135, 280, 0, 0, blue));
    balls.push(new Ball(130, 300, 0, 0, blue));
    balls.push(new Ball(125, 310, 0, 0, blue));

    balls.push(new Ball(153, 220, 0, 0, blue));
    balls.push(new Ball(160, 240, 0, 0, blue));
    balls.push(new Ball(165, 260, 0, 0, blue));
    balls.push(new Ball(170, 280, 0, 0, blue));
    balls.push(new Ball(175, 300, 0, 0, blue));
    balls.push(new Ball(190, 315, 0, 0, blue));

    balls.push(new Ball(242, 160, 0, 0, blue));
    balls.push(new Ball(233, 180, 0, 0, blue));
    balls.push(new Ball(224, 200, 0, 0, blue));
    balls.push(new Ball(225, 220, 0, 0, blue));
    balls.push(new Ball(220, 240, 0, 0, blue));
    balls.push(new Ball(215, 260, 0, 0, blue));
    balls.push(new Ball(210, 280, 0, 0, blue));
    balls.push(new Ball(201, 290, 0, 0, blue));
    balls.push(new Ball(200, 300, 0, 0, blue));
    
    


    //////////////////////// e /////////////////////
    balls.push(new Ball(280, 270, 0, 0, red));
    balls.push(new Ball(289, 271, 0, 0, red));
    balls.push(new Ball(301, 269, 0, 0, red));
    balls.push(new Ball(308, 270, 0, 0, red));
    balls.push(new Ball(316, 272, 0, 0, red));
   	balls.push(new Ball(329, 271, 0, 0, red));
    balls.push(new Ball(340, 269, 0, 0, red));
	balls.push(new Ball(285, 250, 0, 0, red));
	balls.push(new Ball(280, 260, 0, 0, red));
	balls.push(new Ball(289, 240, 0, 0, red));
    balls.push(new Ball(301, 234, 0, 0, red));
	balls.push(new Ball(309, 233, 0, 0, red));
	balls.push(new Ball(320, 235, 0, 0, red));
    balls.push(new Ball(330, 240, 0, 0, red));
    balls.push(new Ball(339, 248, 0, 0, red));
    balls.push(new Ball(341, 255, 0, 0, red));
   	balls.push(new Ball(280, 280, 0, 0, red));
	balls.push(new Ball(285, 289, 0, 0, red));
	balls.push(new Ball(290, 298, 0, 0, red));
	balls.push(new Ball(300, 305, 0, 0, red));
	balls.push(new Ball(312, 307, 0, 0, red));
	balls.push(new Ball(323, 307, 0, 0, red));
	balls.push(new Ball(335, 305, 0, 0, red));

 

    ///////////////////////// L ////////////////////
    balls.push(new Ball(394, 171, 0, 0, green));
    balls.push(new Ball(381, 172, 0, 0, green));
	balls.push(new Ball(391, 233, 0, 0, green));
    balls.push(new Ball(390, 235, 0, 0, green));
    balls.push(new Ball(392, 217, 0, 0, green));
    balls.push(new Ball(391, 200, 0, 0, green));
    balls.push(new Ball(390, 205, 0, 0, green));
    balls.push(new Ball(392, 185, 0, 0, green));
    balls.push(new Ball(391, 243, 0, 0, green));
    balls.push(new Ball(390, 255, 0, 0, green));
    balls.push(new Ball(392, 271, 0, 0, green));
    balls.push(new Ball(390, 287, 0, 0, green));
    balls.push(new Ball(390, 300, 0, 0, green));
    balls.push(new Ball(388, 310, 0, 0, green));
    balls.push(new Ball(400, 310, 0, 0, green));




    /////////////////////////////// C //////////////////////
    var oOffset = 150;
    balls.push(new Ball(oOffset + 280, 270, 0, 0, blue));
    balls.push(new Ball(oOffset + 289, 271, 0, 0, blue));
    balls.push(new Ball(oOffset + 301, 269, 0, 0, blue));
    balls.push(new Ball(oOffset + 308, 270, 0, 0, blue));
    balls.push(new Ball(oOffset + 316, 272, 0, 0, blue));
    balls.push(new Ball(oOffset + 329, 271, 0, 0, blue));
    balls.push(new Ball(oOffset + 340, 269, 0, 0, blue));
    balls.push(new Ball(oOffset + 285, 250, 0, 0, blue));
    balls.push(new Ball(oOffset + 280, 260, 0, 0, blue));
    balls.push(new Ball(oOffset + 289, 240, 0, 0, blue));
    balls.push(new Ball(oOffset + 301, 234, 0, 0, blue));
    balls.push(new Ball(oOffset + 309, 233, 0, 0, blue));
    balls.push(new Ball(oOffset + 320, 235, 0, 0, blue));
    balls.push(new Ball(oOffset + 330, 240, 0, 0, blue));
    balls.push(new Ball(oOffset + 339, 248, 0, 0, blue));
    balls.push(new Ball(oOffset + 341, 255, 0, 0, blue));
    balls.push(new Ball(oOffset + 280, 280, 0, 0, blue));
    balls.push(new Ball(oOffset + 285, 289, 0, 0, blue));
    balls.push(new Ball(oOffset + 290, 298, 0, 0, blue));
    balls.push(new Ball(oOffset + 300, 305, 0, 0, blue));
    balls.push(new Ball(oOffset + 312, 307, 0, 0, blue));
    balls.push(new Ball(oOffset + 323, 307, 0, 0, blue));
    balls.push(new Ball(oOffset + 335, 305, 0, 0, blue));
    
 


	//////////////////////// O ////////////////////////////
    balls.push(new Ball(543, 258, 0, 0, blue));
    balls.push(new Ball(530, 257, 0, 0, blue));
	balls.push(new Ball(518, 262, 0, 0, blue));
    balls.push(new Ball(549, 263, 0, 0, blue));
    balls.push(new Ball(514, 273, 0, 0, blue));
    balls.push(new Ball(560, 275, 0, 0, blue));
    balls.push(new Ball(562, 288, 0, 0, blue));
    balls.push(new Ball(512, 288, 0, 0, blue));
    balls.push(new Ball(560, 295, 0, 0, blue));
    balls.push(new Ball(520, 300, 0, 0, blue));
    balls.push(new Ball(530, 307, 0, 0, blue));
    balls.push(new Ball(550, 305, 0, 0, blue));
    balls.push(new Ball(542, 310, 0, 0, blue));



    //////////////////////////////// M ////////////////////////
	var oOffset = 90;
	balls.push(new Ball(oOffset + 543, 258, 0, 0, green));
    balls.push(new Ball(oOffset + 530, 257, 0, 0, green));
	balls.push(new Ball(oOffset + 518, 262, 0, 0, green));
    balls.push(new Ball(oOffset + 549, 263, 0, 0, green));
    balls.push(new Ball(oOffset + 512, 252, 0, 0, green));
    balls.push(new Ball(oOffset + 514, 273, 0, 0, green));
    balls.push(new Ball(oOffset + 560, 275, 0, 0, green));
    balls.push(new Ball(oOffset + 562, 288, 0, 0, green));
    balls.push(new Ball(oOffset + 512, 310, 0, 0, green));
    balls.push(new Ball(oOffset + 512, 300, 0, 0, green));
    balls.push(new Ball(oOffset + 512, 288, 0, 0, green));
    balls.push(new Ball(oOffset + 560, 295, 0, 0, green));
    balls.push(new Ball(oOffset + 560, 310, 0, 0, green));
	var oOffset = 140;
	balls.push(new Ball(oOffset + 543, 258, 0, 0, green));
    balls.push(new Ball(oOffset + 530, 257, 0, 0, green));
	balls.push(new Ball(oOffset + 518, 262, 0, 0, green));
    balls.push(new Ball(oOffset + 549, 263, 0, 0, green));
    balls.push(new Ball(oOffset + 514, 273, 0, 0, green));
    balls.push(new Ball(oOffset + 560, 275, 0, 0, green));
    balls.push(new Ball(oOffset + 562, 288, 0, 0, green));
    balls.push(new Ball(oOffset + 512, 310, 0, 0, green));
    balls.push(new Ball(oOffset + 512, 300, 0, 0, green));
    balls.push(new Ball(oOffset + 512, 288, 0, 0, green));
    balls.push(new Ball(oOffset + 560, 295, 0, 0, green));
    balls.push(new Ball(oOffset + 560, 310, 0, 0, green));

  

    //////////////////////////////// E /////////////////////////
    var oOffset = 460;
    balls.push(new Ball(oOffset + 280, 270, 0, 0, red));
    balls.push(new Ball(oOffset + 289, 271, 0, 0, red));
    balls.push(new Ball(oOffset + 301, 269, 0, 0, red));
    balls.push(new Ball(oOffset + 308, 270, 0, 0, red));
    balls.push(new Ball(oOffset + 316, 272, 0, 0, red));
   	balls.push(new Ball(oOffset + 329, 271, 0, 0, red));
    balls.push(new Ball(oOffset + 340, 269, 0, 0, red));
	balls.push(new Ball(oOffset + 285, 250, 0, 0, red));
	balls.push(new Ball(oOffset + 280, 260, 0, 0, red));
	balls.push(new Ball(oOffset + 289, 240, 0, 0, red));
    balls.push(new Ball(oOffset + 301, 234, 0, 0, red));
	balls.push(new Ball(oOffset + 309, 233, 0, 0, red));
	balls.push(new Ball(oOffset + 320, 235, 0, 0, red));
    balls.push(new Ball(oOffset + 330, 240, 0, 0, red));
    balls.push(new Ball(oOffset + 339, 248, 0, 0, red));
    balls.push(new Ball(oOffset + 341, 255, 0, 0, red));
   	balls.push(new Ball(oOffset + 280, 280, 0, 0, red));
	balls.push(new Ball(oOffset + 285, 289, 0, 0, red));
	balls.push(new Ball(oOffset + 290, 298, 0, 0, red));
	balls.push(new Ball(oOffset + 300, 305, 0, 0, red));
	balls.push(new Ball(oOffset + 312, 307, 0, 0, red));
	balls.push(new Ball(oOffset + 323, 307, 0, 0, red));
	balls.push(new Ball(oOffset + 335, 305, 0, 0, red));
    


    
 
    return balls;
}
 
function getMousePos(canvas, evt){
    // get canvas position
    var obj = canvas;
    var top = 0;
    var left = 0;
    while (obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
 
    // return relative mouse position
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;
    return {
        x: mouseX,
        y: mouseY
    };
}
 
function updateBalls(canvas, balls, timeDiff, mousePos){
    var context = canvas.getContext("2d");
    var collisionDamper = 0.3;
    var floorFriction = 0.0005 * timeDiff;
    var mouseForceMultiplier = 1 * timeDiff;
    var restoreForce = 0.002 * timeDiff;
 
    for (var n = 0; n < balls.length; n++) {
        var ball = balls[n];
        // set ball position based on velocity
        ball.y += ball.vy;
        ball.x += ball.vx;
 
        // restore forces
        if (ball.x > ball.origX) {
            ball.vx -= restoreForce;
        }
        else {
            ball.vx += restoreForce;
        }
        if (ball.y > ball.origY) {
            ball.vy -= restoreForce;
        }
        else {
            ball.vy += restoreForce;
        }
 
        // mouse forces
        var mouseX = mousePos.x;
        var mouseY = mousePos.y;
 
        var distX = ball.x - mouseX;
        var distY = ball.y - mouseY;
 
        var radius = Math.sqrt(Math.pow(distX, 2) +
        Math.pow(distY, 2));
 
        var totalDist = Math.abs(distX) + Math.abs(distY);
 
        var forceX = (Math.abs(distX) / totalDist) *
        (1 / radius) *
        mouseForceMultiplier;
        var forceY = (Math.abs(distY) / totalDist) *
        (1 / radius) *
        mouseForceMultiplier;
 
        if (distX > 0) { // mouse is left of ball
            ball.vx += forceX;
        }
        else {
            ball.vx -= forceX;
        }
        if (distY > 0) { // mouse is on top of ball
            ball.vy += forceY;
        }
        else {
            ball.vy -= forceY;
        }
 
        // floor friction
        if (ball.vx > 0) {
            ball.vx -= floorFriction;
        }
        else if (ball.vx < 0) {
            ball.vx += floorFriction;
        }
        if (ball.vy > 0) {
            ball.vy -= floorFriction;
        }
        else if (ball.vy < 0) {
            ball.vy += floorFriction;
        }
 
        // floor condition
        if (ball.y > (canvas.height - ball.radius)) {
            ball.y = canvas.height - ball.radius - 2;
            ball.vy *= -1;
            ball.vy *= (1 - collisionDamper);
        }
 
        // ceiling condition
        if (ball.y < (ball.radius)) {
            ball.y = ball.radius + 2;
            ball.vy *= -1;
            ball.vy *= (1 - collisionDamper);
        }
 
        // right wall condition
        if (ball.x > (canvas.width - ball.radius)) {
            ball.x = canvas.width - ball.radius - 2;
            ball.vx *= -1;
            ball.vx *= (1 - collisionDamper);
        }
 
        // left wall condition
        if (ball.x < (ball.radius)) {
            ball.x = ball.radius + 2;
            ball.vx *= -1;
            ball.vx *= (1 - collisionDamper);
        }
    }
}
 
function Ball(x, y, vx, vy, color){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.origX = x;
    this.origY = y;
    this.radius = 10;
}
 
function animate(canvas, balls, lastTime, mousePos){
    var context = canvas.getContext("2d");
 
    // update
    var date = new Date();
    var time = date.getTime();
    var timeDiff = time - lastTime;
    updateBalls(canvas, balls, timeDiff, mousePos);
    lastTime = time;
 
    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);
 
    // render
    for (var n = 0; n < balls.length; n++) {
        var ball = balls[n];
        context.beginPath();
        context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
        context.fillStyle = ball.color;
        context.fill();
    }
 
    // request new frame
    requestAnimFrame(function(){
        animate(canvas, balls, lastTime, mousePos);
    });
}
 
window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var balls = initBalls();
    var date = new Date();
    var time = date.getTime();
    /*
     * set mouse position really far away
     * so the mouse forces are nearly obsolete
     */
    var mousePos = {
        x: 9999,
        y: 9999
    };
 
    canvas.addEventListener("mousemove", function(evt){
        var pos = getMousePos(canvas, evt);
        mousePos.x = pos.x;
        mousePos.y = pos.y;
    });
 
    canvas.addEventListener("mouseout", function(evt){
        mousePos.x = 9999;
        mousePos.y = 9999;
    });
 
    animate(canvas, balls, time, mousePos);
};
  	

