// Notenlänge
let value = 8;

//Normal = 1  /  Punktiert = 1.5  /  Triole = 0.6667
let modifier = 1.5;

//Jeder wievielte Punkt ist groß?
let patternLength = 6;

//vertikale Linien zum orientieren
let pulse = 4;







let measureLength = 1900;
let verticalgap = 100;
let margin = 100;

let noteLength = measureLength / value * modifier;

let circX = margin;
let circY = margin;
let circleradius;


function setup() {
  createCanvas(2100, 2970);
  background(255);
  stroke("magenta");
  strokeWeight(2);
  fill("magenta");

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

      if(round(circX) == margin && i % patternLength == 0){

        for (let k = margin; k <= measureLength + margin; k += measureLength/pulse){
          strokeWeight(1);
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
