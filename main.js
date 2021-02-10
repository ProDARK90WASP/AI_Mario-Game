function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kick = loadSound("kick.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	poseNet= ml5.poseNet(video,modelloaded);
	poseNet.on("pose",gotresult);
}

function draw() {
	game()
}
function modelloaded(){
	console.log("modelloaded");
}
function gotresult(result){
	if(result.length>0){
		console.log(result);
		noseX=result[0].pose.nose.x;
		noseY=result[0].pose.nose.y;
	}
}