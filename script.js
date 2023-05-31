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

var enemHP1 = 100;
var enem1;
var enemHP2 = 100;
var enem2;
var enemHP3 = 100;
var enem3;
var enemHP4 = 200;
var enem4;

var enemTyp1;
var enemTyp2;
var enemTyp3;
var enemTyp4;
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
  if(spelerX <= xspawn1 + 35 && spelerX >= xspawn1 - 35 && spelerY <= yspawn1 + 35     && spelerY >= yspawn1 - 35){
    enemHP1--;
  }
  if(spelerX >= xspawn2 - 35  && spelerX <= xspawn2 + 35 && spelerY <= yspawn2 + 35    && spelerY >= yspawn2 - 35){
    enemHP2--;
  }
  if(spelerX >= xspawn3 - 35 && spelerX <= xspawn3 + 35 && spelerY >= yspawn3 - 35     && spelerY <= yspawn3 + 35){
    enemHP3--;
  }
  if(spelerX <= xspawn4 + 35 && spelerX >= xspawn4 - 35 && spelerY >= yspawn4 - 35     && spelerY <= yspawn4 + 35){
    enemHP4--;
  }
  
  // botsing kasteel tegen vijand en haalt hp weg van kasteel
  if (xspawn1 >= kasteelX && yspawn1 >= kasteelY){
    xspawn1 = xspawn1 - 1;
    yspawn1 = yspawn1 - 0.4;
    kastHP = kastHP - 0.05;
  }
  if (xspawn2 <= kasteelX + 270 && yspawn2 >= kasteelY){
    xspawn2 = xspawn2 + 1;
    yspawn2 = yspawn2 - 0.6;
    kastHP = kastHP - 0.1;
  }
  if (xspawn3 <= kasteelX + 270 && yspawn3 >= kasteelY){
    xspawn3 = xspawn3 + 1;
    yspawn3 = yspawn3 + 0.7;
    kastHP = kastHP - 0.05;
  }
  if (xspawn4 >= kasteelX && yspawn4 >= kasteelY){
    xspawn4 = xspawn4 - 1;
    yspawn4 = yspawn4 + 0.5;
    kastHP = kastHP - 0.05;
  }
  
  
  if (enem1 === false && enem2 === false && enem3 === false && enem4 === false && timeR > 50){
    xspawn1 === 1000;
    yspawn1 === 200;
    xspawn2 === 2000;
    yspawn2 === 200;
    xspawn3 === 2000;
    yspawn3 === 1000;
    xspawn4 === 200;
    yspawn4 === 1000;
    enemHP1 === 100;
    enemHP2 === 100;
    enemHP3 === 100;
    enemHP4 === 200;

    /*xspawn1 === 1000;
    yspawn1 === 200;
    xspawn2 === 2000;
    yspawn2 === 200;
    xspawn3 === 2000;
    yspawn3 === 1000;
    xspawn4 === 200;
    yspawn4 === 1000;
    enemHP1 === 100;
    enemHP2 === 100;
    enemHP3 === 100;
    enemHP4 === 200;*/
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
  if(timeR >= 5 && enemHP1 >= 0 || timeR >= 40){
    enem1 = true;
  }
  else {
    enem1 = false;
  }
  if(timeR >= 10 && enemHP2 >= 0 || timeR >= 45){
    enem2 = true;
  }
  else {
    enem2 = false;
  }
  if(timeR >= 15 && enemHP3 >= 0 || timeR >= 50){
    enem3 = true;
  }
  else {
    enem3 = false;
  }
  if(timeR >= 20 && enemHP4 >= 0 || timeR >= 55){
    enem4 = true;
  }
  else {
    enem4 = false;
  }
  fill("red");

  if(enem1 === true){
    rect(xspawn1, yspawn1, 40, 70);
    image(enemTyp1, xspawn1 - 25, yspawn1 - 25, 100, 100);
    xspawn1++;
    yspawn1 = yspawn1 + 0.4;
  }
  if(enem2 === true){
    rect(xspawn2, yspawn2, 50, 50);
    image(enemTyp2, xspawn2 - 10, yspawn2 - 10, 80, 80);
    xspawn2--;
    yspawn2 = yspawn2 + 0.6;
  }
  if(enem3 === true){
    rect(xspawn3, yspawn3, 50, 50);
    image(enemTyp3, xspawn3 - 25, yspawn3 - 25, 100, 100);
    xspawn3--;
    yspawn3 = yspawn3 - 0.7;
  }
  if(enem4 === true){
    rect(xspawn4, yspawn4, 50, 50);
    image(enemTyp4, xspawn4 - 40, yspawn4 - 40, 150, 150);
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
  //hp bar
  fill("red");
  rect(750, 10, 1000, 60);
  fill("green");
  rect(750, 10, kastHP, 60);
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
  if(kastHP <= 0 || timeR >= 300) {
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
  enemTyp1 = loadImage('npc/soldier2.png');
  enemTyp2 = loadImage('npc/soldier3.png');
  enemTyp3 = loadImage('npc/soldier8.png');
  enemTyp4 = loadImage('npc/soldier4.png');
  
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
    fill("grey");
    rect(150, 750, 2200, 450);
    fill("maroon");
    textSize(200);
    text(enD, 200, 910);
    text("time survived:", 200, 1075);
    text(floor(timeR), 1450, 1075);
    
  }
}
