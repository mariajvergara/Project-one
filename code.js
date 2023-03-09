var audio = document.getElementById("audio");

function playPause() {
    return audio.paused ? audio.play() : audio.pause();
};


var ball = document.createElement('div');
ball.style.width = '800px';
ball.style.height = '800px';
ball.style.borderRadius = '400px';
ball.style.background = 'rgb(255,255,255, 0.1)';
ball.style.position = 'absolute';
ball.style.top = '0px';
ball.style.left = '0px';
document.body.appendChild(ball);
var x = 0;
var y = 0;
var xVel = .1;
var yVel = .1;
setInterval(function() {
  x += xVel;
  y += yVel;
  if (x > window.innerWidth - 700) {
    xVel = -.1;
  }
  if (x < 0) {
    xVel = .1;
  }
  if (y > window.innerHeight - 700) {
    yVel = -.1;
  }
  if (y < 0) {
    yVel = .1;
  }
  ball.style.top = y + 'px';
  ball.style.left = x + 'px';
}, 10);