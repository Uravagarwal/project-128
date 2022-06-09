song="";

leftWrist_X = 0;
leftWrist_Y = 0;

rightWrist_x = 0;
rightWrist_Y = 0;

function preload()
{
    song = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log("hi");
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play();
}

function gotPoses(results)
{
    if(results.length>0)
    {
        leftWrist_X = results[0].pose.leftWrist.x;
        leftWrist_Y = results[0].pose.leftWrist.y;
        console.log("leftWrist x = "+leftWrist_X+"leftWrist y = "+leftWrist_Y);

        rightWrist_X = results[0].pose.rightWrist.x;
        rightWrist_Y = results[0].pose.rightWrist.y;
        console.log("rightWrist x = "+rightWrist_X+"rightWrist y = "+rightWrist_Y);
    }
}