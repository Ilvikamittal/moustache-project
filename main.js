noseX=0;
noseY=0;

function preload(){
    moustache=loadImage("moustach_img.png");
}

function setup(){
    canvas=createCanvas(350, 300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(350,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",getPoses);

}

function draw(){
    image(video,0,0,350,300);
    image(moustache,noseX,noseY,100,100);
}

function take_snapshot(){
    save("animation.png");
}

function modelLoaded(){
    console.log("modelLoaded");
}

function getPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("noseX= "+results[0].pose.nose.x);
        console.log("noseY= "+results[0].pose.nose.y);

        noseX=results[0].pose.nose.x-50;
        noseY=results[0].pose.nose.y-10;
    }
}
