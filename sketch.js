function setup() {
    createCanvas(400, 400);
  background("red");
  }
  function draw() {
    
   stroke("purple");
   fill("pink");
   if(mouseIsPressed){
   rect(mouseX, mouseY, 20, 20);
  }
  }
  