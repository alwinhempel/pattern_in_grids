let modifierSelect;
let valueSelect;
let patternLengthSelect;
let pulseSelect;

// // Notenlänge
// let value = 16;

// //Normal = 1  /  Punktiert = 1.5  /  Triole = 0.6667

// //Jeder wievielte Punkt ist groß?
// let patternLength = 6;

// //vertikale Linien zum orientieren
// let pulse = 4 ;




function setup() {
  createCanvas(windowWidth, windowHeight*0.9);


  //pattenLength
  patternLengthSelect = createRadio();
  patternLengthSelect.size(300, 50);
  patternLengthSelect.position(0,0);
  patternLengthSelect.option(1, '1');
  patternLengthSelect.option(2, '2');
  patternLengthSelect.option(3, '3');
  patternLengthSelect.option(4, '4');
  patternLengthSelect.option(5, '5');
  patternLengthSelect.option(6, '6');
  patternLengthSelect.option(7, '7');
  patternLengthSelect.option(8, '8');
  patternLengthSelect.selected('6');
  patternLengthSelect.changed(drawGrid);

  //value
  valueSelect = createRadio();
  valueSelect.size(300, 50);
  valueSelect.position(windowWidth/2-110, 0);
  valueSelect.option(2, '1/2');
  valueSelect.option(4, '1/4');
  valueSelect.option(8, '1/8');
  valueSelect.option(16, '1/16');
  valueSelect.selected('16')
  valueSelect.changed(drawGrid);

  //modifier
  modifierSelect = createRadio();
  modifierSelect.size(300,50);
  modifierSelect.position(windowWidth-225, 0);
  modifierSelect.option(1, 'normal');
  modifierSelect.option(1.5, 'punktiert');
  modifierSelect.option(0.6667, 'triole');
  modifierSelect.selected('1.5');
  modifierSelect.changed(drawGrid);



  //Pulse
  pulseSelect = createRadio();
  pulseSelect.size(300, 50);
  pulseSelect.position(windowWidth/2-110, windowHeight - 50);
  pulseSelect.option(2, '1/2');
  pulseSelect.option(4, '1/4');
  pulseSelect.option(8, '1/8');
  pulseSelect.option(16, '1/16');
  pulseSelect.selected('16')
  pulseSelect.changed(drawGrid);


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


  let modifier = Number(modifierSelect.value());
  let value = Number(valueSelect.value());
  let patternLength = Number(patternLengthSelect.value());
  let pulse = Number(pulseSelect.value());


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
      circleradius = 0.04 * windowHeight;
    } else {
      circleradius = 0.02 * windowHeight;
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
