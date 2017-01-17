function setup() {
  var Canvas= createCanvas(450, 1200); 
    Canvas.parent('sketchContainer');
  background(100, 0);
}


 function mouseDragged() {
    stroke(0, 0, 255);
    strokeCap(round);
     strokeJoin(ROUND);
    strokeWeight(2.5); 
       smooth(); line(mouseX,mouseY,pmouseX,pmouseY);

    
  }


function keyTyped() {
    if (key === 'a') {
         stroke(0,0,255);
        strokeWeight(5);
        fill(255);
        ellipse(mouseX, mouseY, 20, 20); 
    } else if (key ==='x') {
        stroke(0,0,255);
        strokeWeight(5);
        line(mouseX+8, mouseY-8, mouseX-8, mouseY+8);
        line(mouseX-8, mouseY-8, mouseX+8, mouseY+8);
    }
}