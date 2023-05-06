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

var xspawn1 = 200;
var yspawn1 = 200;

var xspawn2 = 2000;
var yspawn2 = 200;

var xspawn3 = 2000;
var yspawn3 = 1000;

var xspawn4 = 200;
var yspawn4 = 1000;

var enD = "GAMEOVER NOOB XD";

var kastHP = 1000;
var kasT;
var kastDes;
var kastTOT = "/1000";

var enemHP1 = 20;
var enem1;
var enemHP2 = 20;
var enem2;
var enemHP3 = 20;
var enem3;
var enemHP4 = 30;
var enem4;
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
    /*vijandX += (spelerX - vijandX) / vijandDelay;
    vijandY += (spelerY - vijandY) / vijandDelay; 
  */
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
  if(spelerX === xspawn1 + 25 && spelerY === yspawn1 + 25){
    enemHP1--;
  }
  if(spelerX === xspawn2 + 25 && spelerY === yspawn2 + 25){
    enemHP2--;
  }
  if(spelerX === xspawn3 + 25 && spelerY === yspawn3 + 25){
    enemHP3--;
  }
  if(spelerX === xspawn4 + 25 && spelerY === yspawn4 + 25){
    enemHP4--;
  }
  
  // botsing kasteel tegen vijand en haalt hp weg van kasteel
  if (xspawn1 >= kasteelX && yspawn1 >= kasteelY){
    xspawn1 = xspawn1 - 1;
    yspawn1 = yspawn1 - 0.4;
    kastHP = kastHP - 0.04;
  }
  if (xspawn2 <= kasteelX + 270 && yspawn2 >= kasteelY){
    xspawn2 = xspawn2 + 1;
    yspawn2 = yspawn2 - 0.6;
    kastHP = kastHP - 0.04;
  }
  if (xspawn3 <= kasteelX + 270 && yspawn3 >= kasteelY){
    xspawn3 = xspawn3 + 1;
    yspawn3 = yspawn3 + 0.7;
    kastHP = kastHP - 0.04;
  }
  if (xspawn4 >= kasteelX && yspawn4 >= kasteelY){
    xspawn4 = xspawn4 - 1;
    yspawn4 = yspawn4 + 0.5;
    kastHP = kastHP - 0.04;
  }

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
  if(kastHP >= 1){
    kasT = true;
  }
  else{
    kasT = false;
  }
  if(kasT === true){
    image(kasteel, 1100, 400, 300, 300);
  }
  if(kastHP <= 2){
    image(kastDes, 1100, 400, 300, 300);
  }
  //cursor
  image(curSor, mouseX, mouseY, 75, 75);
  
  // vijand
  /*fill("red");
  rect(vijandX - 25, vijandY - 25, 50, 50);*/
  fill("black");
  ellipse(vijandX, vijandY, 10, 10);

//geeft laat enemy spawnen als ie hp heeft en de tijd rijp is
  if(timeR >= 5 && enemHP1 >= 0){
    enem1 = true;
  }
  else {
    enem1 = false;
  }
  if(timeR >= 15 && enemHP2 >= 0){
    enem2 = true;
  }
  else {
    enem2 = false;
  }
  if(timeR >= 25 && enemHP3 >= 0){
    enem3 = true;
  }
  else {
    enem3 = false;
  }
  if(timeR >= 35 && enemHP4 >= 0){
    enem4 = true;
  }
  else {
    enem4 = false;
  }
  fill("red");
  if(enem1 === true){
    rect(xspawn1, yspawn1, 50, 50);
    xspawn1++;
    yspawn1 = yspawn1 + 0.4;
  }
  if(enem2 === true){
    rect(xspawn2, yspawn2, 50, 50);
    xspawn2--;
    yspawn2 = yspawn2 + 0.6;
  }
  if(enem3 === true){
    rect(xspawn3, yspawn3, 50, 50);
    xspawn3--;
    yspawn3 = yspawn3 - 0.7;
  }
  if(enem4 === true){
    rect(xspawn4, yspawn4, 50, 50);
    xspawn4++;
    yspawn4 = yspawn4 - 0.5;
  }
  
  // kogel

  // speler
  
  
  image(soldier, spelerX - 55, spelerY - 43, 120, 100);
  // punten en health
  
  //timer
  fill("cyan");
  textSize(100);
  text(floor(timeR), 100, 100);
  fill("green");
  rect(750, 10, 1000, 60);
  fill("black");
  textSize(50);
  text(floor(kastHP), 1100, 60);
  text(kastTOT, 1250, 60);
  
  
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  // check of HP 0 is , of tijd op is, of ...
  if(kastHP <= 0) {
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
  kastDes = loadImage('kastDes.png');
  
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
    fill("maroon");
    textSize(200);
    text(enD, 200, 500);
    
  }
}
