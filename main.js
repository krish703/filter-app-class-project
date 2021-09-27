noseX=0;
noseY=0;
function preload(){
Mustache=loadImage('https://i.postimg.cc/VLC0Mn6M/MUSTACHE.gif');

}
function setup(){
    var canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function draw(){
image(video,0,0, 300,300);
image(Mustache,noseX,noseY,60,60);
}
function take_snapshot(){
save('krishna.png');
} 
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotposes(results){
if(results.length>0){
    console.log(results);
  noseX= results[0].pose.nose.x -25;
  noseY= results[0].pose.nose.y-10; 
}
}