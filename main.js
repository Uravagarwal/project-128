song="";
song_2="";

leftWrist_X = 0;
leftWrist_Y = 0;
score_leftWrist = 0;

rightWrist_x = 0;
rightWrist_Y = 0;

function preload()
{
    song = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3")
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

    song.isPlaying()

    fill("yellow");
    stroke("red");

    if(score_leftWrist>0.2)
    {
        circle(leftWrist_X, leftWrist_Y , 20);
        song_2.stop()
    }
}

function play()
{
    song.play();
}

function gotPoses(results)
{
    if(results.length>0)
    {   console.log(results);
        score_leftWrist = results[0].pose.keypoints[9].score;
        leftWrist_X = results[0].pose.leftWrist.x;
        leftWrist_Y = results[0].pose.leftWrist.y;
        console.log("leftWrist x = "+leftWrist_X+"leftWrist y = "+leftWrist_Y);
        console.log("leftWrist_score"+score_leftWrist);

        rightWrist_X = results[0].pose.rightWrist.x;
        rightWrist_Y = results[0].pose.rightWrist.y;
        console.log("rightWrist x = "+rightWrist_X+"rightWrist y = "+rightWrist_Y);
    }
}