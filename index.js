//Canvas size
let canvasWidth = 1000;
let canvasHeight = 600;

// Ball variables
let xBall = canvasWidth / 2;
let yBall = canvasHeight / 2;
let diameterBall = 25;
let ratioBall = diameterBall / 2;

// Ball Speed variables
let speedXBall = 6;
let speedYBall = 6;

// Bars variables
let widthBar = 10;
let heightBar = 125;

// Player 1 bar variables
let xPlayer1Bar = 5;
let yPlayer1Bar = yBall - heightBar / 2;
let speedYPlayer1Bar;

// Player 2 bar variables
let xPlayer2Bar = canvasWidth - widthBar - 5;
let yPlayer2Bar = yBall - heightBar / 2;
let speedYPlayer2Bar;

// Bar hit variables
let hasHit =  false;

// Game score variables
let player1Points = 0;
let player2Points = 0;

function showBall() {
  circle(xBall, yBall, diameterBall);
}

function movimentBall() {
  xBall += speedXBall;
  yBall += speedYBall;
}

function borderHit() {
  if(xBall + ratioBall > width || xBall - ratioBall < 0) {
    speedXBall *= -1;
  }
  if(yBall + ratioBall > height || yBall - ratioBall < 0) {
    speedYBall *= -1;
  }
}

// function showPlayer1Bar() {
//   rect(xPlayer1Bar, yPlayer1Bar, widthBar, heightBar);
// }

function showPlayersBars(x, y) {
  rect(x, y, widthBar, heightBar);
}

function movimentPlayer1Bar() {
  if(keyIsDown(UP_ARROW)) {
    yPlayer1Bar -= 10;
  }

  if(keyIsDown(DOWN_ARROW)) {
    yPlayer1Bar += 10;
  }
}


// function showPlayer2Bar() {
//   rect(xPlayer2Bar, yPlayer2Bar, widthBar, heightBar);
// }

function movimentPlayer2Bar() {
  speedYPlayer2Bar = yBall - yPlayer2Bar - heightBar / 2 - 30;
  yPlayer2Bar += speedYPlayer2Bar;
}

// function checkLeftBarHit() {
//   if (xBall - ratioBall < xPlayer1Bar + widthBar && yBall - ratioBall < yPlayer1Bar + heightBar && yBall + ratioBall > yPlayer1Bar){
//     speedXBall *= -1;
//   }
// }

function checkBarHit(x, y) {
  hasHit = collideRectCircle(x, y, widthBar, heightBar, xBall, yBall, ratioBall);
  if (hasHit) {
    speedXBall *= -1;
  }
}

function showGameScore() {
  fill(color('#fff'));
  textSize(40);
  textFont('Poppins');
  textAlign(CENTER);
  text('Player1 #    ' + player1Points, 333, 60);
  text(player2Points + '    # Player2', 666, 60);
}

function addPointScore () {
  if (xBall > canvasWidth - 10) {
    player1Points += 1;
  }
  if (xBall < 10) {
    player2Points += 1;
  }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(0);
  showBall();
  movimentBall();
  borderHit();
  showPlayersBars(xPlayer1Bar, yPlayer1Bar);
  showPlayersBars(xPlayer2Bar, yPlayer2Bar);
  movimentPlayer1Bar();
  movimentPlayer2Bar();
  checkBarHit(xPlayer1Bar, yPlayer1Bar);
  checkBarHit(xPlayer2Bar, yPlayer2Bar);
  showGameScore();
  addPointScore();
}