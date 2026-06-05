// Notenlänge
let value = 16;

//Normal = 1  /  Punktiert = 1.5  /  Triole = 0.6667
let modifier = 1.5;

//Jeder wievielte Punkt ist groß?
let patternLength = 6;

//vertikale Linien zum orientieren
let pulse = 4 ;




function setup() {
  createCanvas(windowWidth, windowHeight);
  drawGrid();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  drawGrid();
}

function drawGrid(){

  background(255);
  stroke("magenta");
  strokeWeight(2);
  fill("magenta");

  let measureLength = round(windowWidth * 0.8);
  let verticalgap = windowHeight * 0.075;
  let margin = windowWidth * 0.1;
  let noteLength = measureLength / value * modifier;
  let circX = margin;
  let circY = margin;
  let circleradius;

  line(margin, circY, measureLength + margin, circY);



  for (let i = 0; i < 256; i++){

    // Pattern durch Größe
    if(i % patternLength == 0){
      circleradius = 60;
    } else {
      circleradius = 30;
    };




    if (circX >= measureLength + margin){ 

      circX -= measureLength;
      circY += verticalgap;

      if(round(circX) == round(margin) && i % patternLength == 0){

        for (let k = margin; k < measureLength + margin; k += measureLength/pulse){
          strokeWeight(1);
          stroke("magenta");
          line(k, margin, k, circY - verticalgap);
        };

        break;


      } else {

        line(margin, circY, measureLength + margin, circY);
        circle(circX, circY, circleradius);
        circX += noteLength;

      }
    } else {

      circle(circX, circY, circleradius);
      circX += noteLength;
    
    };


  }
  


}
