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

var enemySpawnx = [200, 1100, 2000];
var enemySpawny = [200, 1000];

var soldier;
var curSor;
var kasteel = '';
var kasteelX = 1100;
var kasteelY = 400;
var achtergrond; 

var timeR = 0;

var spawn = 0;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function() {
  
  // speler
  if (mouseIsPressed){
    
    spelerX += (mouseX - spelerX) / (spelerDelay * 0.75)
    spelerY += (mouseY - spelerY) / (spelerDelay * 0.75)
  }
  // vijand
    vijandX += (spelerX - vijandX) / vijandDelay;
    vijandY += (spelerY - vijandY) / vijandDelay; 

  // kogel

  //timer
    timeR = timeR + 0.02;
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

 /* Tekent spelscherm*/
var tekenAlles = function() {
  //kasteel hitbox
  fill(255, 255, 255);
  rect(kasteelX , kasteelY, 300, 300);

  //hitboxen
  fill("limegreen");
  rect(spelerX - 25, spelerY - 25, 50, 70); 
  fill("black");
  ellipse(spelerX, spelerY + 10, 10, 10);

  
  
  // achtergrond
  image(achtergrond, 0, 0, 2500, 1100);
  
  // kasteel
  image(kasteel, 1100, 400, 300, 300);
  
  //cursor
  image(curSor, mouseX, mouseY, 75, 75);
  
  // vijand
  fill("red");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX, vijandY, 10, 10);

  fill("cyan");
  if(timeR >= 5 || timeR >= 20){
    rect(enemySpawnx[0], enemySpawny[0], 50, 50);
    enemySpawnx[0] = enemySpawnx[0] + 1;
    enemySpawny[0] = enemySpawny[0] + 0.7;
    
  }
  if(timeR >= 10){
    rect(enemySpawnx[0], enemySpawny[1], 50, 50);
    enemySpawnx[0] = enemySpawnx[0] + 1;
    enemySpawny[1] = enemySpawny[1] - 1;
  }
  if(timeR >= 20){
    rect(enemySpawnx[2], enemySpawny[1], 50, 50);
    enemySpawnx[2] = enemySpawnx[2] - 1;
    enemySpawny[1] = enemySpawny[1] - 1;
  }
  if(timeR >= 40){
    rect(enemySpawnx[1], enemySpawny[1], 50, 50);
    enemySpawnx[1] = enemySpawnx[1] + 1;
    enemySpawny[1] = enemySpawny[1] + 1;
  }
  if(timeR >= 30){
    rect(enemySpawnx[2], enemySpawny[1], 50, 50);
    enemySpawnx[2] = enemySpawnx[2] + 1;
    enemySpawny[1] = enemySpawny[1] + 1;
  }
  // kogel

  // speler
  
  
  image(soldier, spelerX - 55, spelerY - 43, 120, 100);
  // punten en health
  
  //timer
  textSize(100);
  text(floor(timeR), 100, 100);
  
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  if(timeR >= 100) {
    return true;
  }
 
  
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload() {
  achtergrond = loadImage('grass.png');
  curSor = loadImage('cursor.png');
  kasteel = loadImage('castlevania.png');
  soldier = loadImage('soldier.png');
  
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
    fill(pink);
    textSize(200);
    text('gameover', 900, 500);
    
  }
}
