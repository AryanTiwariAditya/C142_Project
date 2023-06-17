MoonLight = "";
Hope = "";
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;

function preload()
{
    MoonLight = loadSound("XXXTENTACION-MOONLIGHT.mp3");
    Hope = loadSound("XXXTENTACION-Hope.mp3");
}

function setup()
{
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture();
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 530);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist_x;
        leftWrist_y = results[0].pose.leftWrist_y;
        console.log("leftWrist_X = " + leftWrist_x + " leftWrist_Y = " + leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist_x;
        rightWrist_y = results[0].pose.rightWrist_y;
        console.log("rightWrist_X = " + rightWrist_x + " rightWrist_Y = " + rightWrist_y);
    }
}