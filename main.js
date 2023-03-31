var song1 = "";
var song2 = "";

function preload(){
    song1 = loadSound("imperial-march.mp3");
    song2 = loadSound("skywalker-theme.mp3");
};

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
};

function draw(){
    image(video, 0, 0, 500, 500);
};