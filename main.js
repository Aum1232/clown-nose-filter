noseX = 0;
noseY = 0;
function preload() {
    clownnose = loadImage("https://i.postimg.cc/7YpVH1XX/clownnose.png");
}
function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}
function modelLoaded() {
    console.log("poseNet is initialized");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("nosex = " + results[0].pose.nose.x);
        console.log("nosey = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clownnose,noseX,noseY,30,30);
}
function Take_Snapshot() {
    save("my_picture.png");
}