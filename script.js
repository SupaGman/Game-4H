/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/*
 * instellingen om foutcontrole van je code beter te maken 
 */
///<reference path="p5.global-mode.d.ts" />
"use strict"

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN

var spelerX = 1250; // x-positie van speler
var spelerY = 550; // y-positie van speler
var spelerDelay = 44;

var vijandX = 1250; // x-positie van vijand
var vijandY = 550; // y-positie van vijand
var vijandDelay = 60;

var curSor;
var kasteel;
var grASS;

var timeR = round(0);

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {

  // speler
  if (mouseIsPressed === true){
    
    spelerX += (mouseX - spelerX) / spelerDelay;
    spelerY += (mouseY - spelerY) / spelerDelay;
  }
  // vijand
    vijandX += (spelerX - vijandX) / vijandDelay;
    vijandY += (spelerY - vijandY) / vijandDelay; 

  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function() {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};
/*
function mouseClicked(){
 spelerX = event.clientX;
 spelerY = event.clientY;
}
*/
/**
 * Tekent spelscherm
 */
var tekenAlles = function() {
  // achtergrond
  image(grASS, 2500, 1100, 2500, 1100);
  // kasteel
  
  image(kasteel, 1100, 400, 300, 300);
  
  //cursor
  image(curSor, mouseX, mouseY, 75, 75);
  
  // vijand
  fill("red");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX, vijandY, 10, 10);

  // kogel

  // speler
  fill("limegreen");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health
  
  //timer
  textSize(100);
  text(timeR, 100, 100, 100);
  
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload() {
  curSor = loadImage('cursor.png');
  kasteel = loadImage('castlevania.png');
  grASS = loadImage('grass.png');
};
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen

  createCanvas(2500, 1100);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  document.body.style.backgroundImage = "url('grass.png')";
  background('green');

}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    background('green');
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
