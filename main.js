function setup(){
    canvas = createCanvas(640,480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);
    //circles 
    fill(255, 103, 0);
    stroke(255, 103, 0);
    circle(50, 50, 80);
    circle(50, 435, 80 );
    circle(570, 435, 80)
    circle(570, 50, 80)
    
    //rectangles
    fill(0, 255, 255);
    stroke(0, 255, 255);
    rect(90, 40 ,460, 20);
    rect(90, 420, 460, 20);
    rect(40, 70, 20, 335);
    rect(565, 70, 20, 335);
}

function take_snapshot() {
    save( document.getElementById('username').value + '.png');
}