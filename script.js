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
const UITLEG = 3;
var spelStatus = UITLEG;


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


var xspawn = [200, 2000, 2000, 200, 200, 2000, 2000, 200, 200];
var yspawn = [200, 200, 1000, 1000, 200, 200, 1000, 1000, 200];

var enD = "GAMEOVER NOOB XD";

var kastHP = 1000;
var kasT;
var kastDes;
var kastTOT = "/1000";

var enem1;
var enem2;
var enem3;
var enem4;
var enem5;
var enem6;
var enem7;
var enem8;

var enemHP = [100, 150, 80, 400, 100, 150, 80, 100, 1000];

var enemTyp1;
var enemTyp2;
var enemTyp3;
var enemTyp4;
var bossTyp;

var boSS;
var bossB;

var begin;
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
  if(spelerX <= xspawn[0] + 35 && spelerX >= xspawn[0] - 35 && spelerY <= yspawn[0] + 35     && spelerY >= yspawn[0] - 35){
    enemHP[0]--;
  }
  if(spelerX >= xspawn[1] - 35  && spelerX <= xspawn[1] + 35 && spelerY <= yspawn[1] + 35    && spelerY >= yspawn[1] - 35){
    enemHP[1]--;
  }
  if(spelerX >= xspawn[2] - 35 && spelerX <= xspawn[2] + 35 && spelerY >= yspawn[2] - 35     && spelerY <= yspawn[2] + 35){
    enemHP[2]--;
  }
  if(spelerX <= xspawn[3] + 60 && spelerX >= xspawn[3] - 60 && spelerY >= yspawn[3] - 60     && spelerY <= yspawn[3] + 60){
    enemHP[3]--;
  }
    if(spelerX <= xspawn[4] + 35 && spelerX >= xspawn[4] - 35 && spelerY <= yspawn[4] + 35     && spelerY >= yspawn[4] - 35){
    enemHP[4]--;
  }
  if(spelerX >= xspawn[5] - 35  && spelerX <= xspawn[5] + 35 && spelerY <= yspawn[5] + 35 && spelerY >= yspawn[5] - 35){
    enemHP[5]--;
  }
  if(spelerX >= xspawn[6] - 35 && spelerX <= xspawn[6] + 35 && spelerY >= yspawn[6] - 35 && spelerY <= yspawn[6] + 35){
    enemHP[6]--;
  }
  if(spelerX <= xspawn[7] + 60 && spelerX >= xspawn[7] - 60 && spelerY >= yspawn[7] - 60 && spelerY <= yspawn[7] + 60){
    enemHP[7]--;
  }
  if(spelerX <= xspawn[8] + 200 && spelerX >= xspawn[8] - 200 && spelerY <= yspawn[8] + 200 && spelerY >= yspawn[8] - 200){
    enemHP[8]--;
  }
  
  // botsing kasteel tegen vijand en haalt hp weg van kasteel
  if (xspawn[0] >= kasteelX && yspawn[0] >= kasteelY){
    xspawn[0] = xspawn[0] - 1;
    yspawn[0] = yspawn[0] - 0.4;
    kastHP = kastHP - 0.05;
  }
  if (xspawn[1] <= kasteelX + 270 && yspawn[1] >= kasteelY){
    xspawn[1] = xspawn[1] + 1;
    yspawn[1] = yspawn[1] - 0.6;
    kastHP = kastHP - 0.1;
  }
  if (xspawn[2] <= kasteelX + 270 && yspawn[2] >= kasteelY){
    xspawn[2] = xspawn[2] + 1;
    yspawn[2] = yspawn[2] + 0.7;
    kastHP = kastHP - 0.05;
  }
  if (xspawn[3] >= kasteelX && yspawn[3] >= kasteelY){
    xspawn[3] = xspawn[3] - 1;
    yspawn[3] = yspawn[3] + 0.5;
    kastHP = kastHP - 0.15;
  }
    if (xspawn[4] >= kasteelX && yspawn[4] >= kasteelY){
    xspawn[4] = xspawn[4] - 1;
    yspawn[4] = yspawn[4] - 0.4;
    kastHP = kastHP - 0.05;
  }
  if (xspawn[5] <= kasteelX + 270 && yspawn[5] >= kasteelY){
    xspawn[5] = xspawn[5] + 1;
    yspawn[5] = yspawn[5] - 0.6;
    kastHP = kastHP - 0.1;
  }
  if (xspawn[6] <= kasteelX + 270 && yspawn[6] >= kasteelY){
    xspawn[6] = xspawn[6] + 1;
    yspawn[6] = yspawn[6] + 0.7;
    kastHP = kastHP - 0.05;
  }
  if (xspawn[7] >= kasteelX && yspawn[7] >= kasteelY){
    xspawn[7] = xspawn[7] - 1;
    yspawn[7] = yspawn[7] + 0.5;
    kastHP = kastHP - 0.15;
  }
  if (xspawn[8] >= kasteelX && yspawn[8] >= kasteelY){
    xspawn[8] = xspawn[8] - 1;
    yspawn[8] = yspawn[8] - 0.2;
    kastHP = kastHP - 0.25;
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
  if(timeR >= 5 && enemHP[0] >= 0){
    enem1 = true;
  }
  else {
    enem1 = false;
  }
  if(timeR >= 10 && enemHP[1] >= 0){
    enem2 = true;
  }
  else {
    enem2 = false;
  }
  if(timeR >= 15 && enemHP[2] >= 0){
    enem3 = true;
  }
  else {
    enem3 = false;
  }
  if(timeR >= 20 && enemHP[3] >= 0){
    enem4 = true;
  }
  else {
    enem4 = false;
  }
  if(timeR >= 30 && enemHP[4] >= 0){
    enem5 = true;
  }
  else {
    enem5 = false;
  }
  if(timeR >= 45 && enemHP[5] >= 0){
    enem6 = true;
  }
  else {
    enem6 = false;
  }
  if(timeR >= 50 && enemHP[6] >= 0){
    enem7 = true;
  }
  else {
    enem7 = false;
  }
  if(timeR >= 55 && enemHP[7] >= 0){
    enem8 = true;
  }
  else {
    enem8 = false;
  }
  if(timeR >= 70 && enemHP[8] >= 0){
    bossB = true;
  }
  else {
    bossB = false;
  }

  if(enem1 === true){
    image(enemTyp1, xspawn[0] - 25, yspawn[0] - 25, 100, 100);
    xspawn[0]++;
    yspawn[0] = yspawn[0] + 0.4;
  }
  if(enem2 === true){
    image(enemTyp2, xspawn[1] - 10, yspawn[1] - 10, 100, 100);
    xspawn[1]--;
    yspawn[1] = yspawn[1] + 0.6;
  }
  if(enem3 === true){
    image(enemTyp3, xspawn[2] - 25, yspawn[2] - 25, 100, 100);
    xspawn[2]--;
    yspawn[2] = yspawn[2] - 0.7;
  }
  if(enem4 === true){
    image(enemTyp4, xspawn[3] - 40, yspawn[3] - 40, 200, 200);
    xspawn[3]++;
    yspawn[3] = yspawn[3] - 0.5;
  }
  if(enem5 === true){
    image(enemTyp1, xspawn[4] - 25, yspawn[4] - 25, 100, 100);
    xspawn[4]++;
    yspawn[4] = yspawn[4] + 0.4;
  }
  if(enem6 === true){
    image(enemTyp2, xspawn[5] - 10, yspawn[5] - 10, 100, 100);
    xspawn[5]--;
    yspawn[5] = yspawn[5] + 0.6;
  }
  if(enem7 === true){
    image(enemTyp3, xspawn[6] - 25, yspawn[6] - 25, 100, 100);
    xspawn[6]--;
    yspawn[6] = yspawn[6] - 0.7;
  }
  if(enem8 === true){
    image(enemTyp4, xspawn[7] - 40, yspawn[7] - 40, 200, 200);
    xspawn[7]++;
    yspawn[7] = yspawn[7] - 0.5;
  }
  if(bossB === true){
    image(boSS, xspawn[8] - 40, yspawn[8] - 40, 400, 400);
    xspawn[8]++;
    yspawn[8] = yspawn[8] + 0.2;
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
  if(kastHP <= 0 || timeR >= 120) {
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
  begin = loadImage('dragonbaaaa.jpeg');
  boSS = loadImage('boss.webp');
  
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
  //background('green');
}



/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
var uitleg1 = function(){
  background('grey');
  image(begin, 0, 0, 2500, 1100);
  textSize(90);
  fill('white');
  text("press space to play", 800, 700);
  text("use mouse and mouse click to move the character", 200, 600);
  textSize(150);
  text("Sole defender", 800, 170);
  
}
function draw() {

  if(spelStatus === UITLEG){
    uitleg1();
    if(keyIsDown(32)){
    spelStatus = SPELEN;
  }
}

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
    if(kastHP <= 0){
    fill("grey");
    rect(150, 750, 2200, 450);
    fill("maroon");
    textSize(200);
    text(enD, 200, 910);
    text("time survived:", 200, 1075);
    text(floor(timeR), 1450, 1075);
    textSize(85);
    text("ctrl + r to restart", 1700, 1075);
    }
    
    if(kastHP >= 0 && timeR >= 120){
    fill("grey");
    rect(150, 600, 1200, 650);
    fill("maroon");
    textSize(200);
    text("you survived", 200, 810);
    text("congrats", 200, 955);
    textSize(85);
    text("ctrl + r to restart", 200, 1075);
    }
  }
}
