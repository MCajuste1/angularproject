import { reject } from "q";

function setUp(){
createCanvas(400,400);
}

function draw(){
rotate(angle);
fill(255);
rectMode(CENTER);
rect (0,0,100,50);


angle = angle +1;
}


