var song1 = "";
var song2 = "";
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;
var score = 0;
song1_playing = "";

function preload() {
    song1 = loadSound("imperial-march.mp3");
    song2 = loadSound("skywalker-theme.mp3");
};

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
};

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        score = results[0].pose.keypoints[9].score;
        console.log("Left wrist x = " + leftWristX + ", left wrist y = " + leftWristY + ", right wrist x = " + rightWristX + ", right wrist y = " + rightWristY);
    };
};

function modelLoaded() {
    console.log("ml5 Version: " + ml5.version + ", model has been initialized successfully!");
};

function draw() {
    image(video, 0, 0, 500, 500);
    fill("red");
    stroke("red");
    song1_playing = song1.isPlaying();
    if(score > 0.05){
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if(song1_playing == false){
            song1.play();
            document.getElementById("song_name").innerHTML = "Song Playing: Imperial March - Darth Vader's Theme";
        };
    };
};