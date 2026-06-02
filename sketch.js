let measureLength = 1900;
let pulse = 16;

let verticalgap = 100;
let margin = 100;

let value = 8;
let modifier = 0.6667;
let noteLength = measureLength / value * modifier;
let patternLength = 6;


let circX = margin;
let circY = margin;
let circleradius;



function setup() {
  createCanvas(2100, 2970);
  background(255);
  stroke("magenta");
  strokeWeight(2);

  //vertical grid
  for (let j = margin; j < 2970; j += verticalgap) {
    line(margin, j, measureLength + margin, j);
  }
  
  //horizontal grid
  for (let k = margin; k <= measureLength + margin; k += measureLength/pulse){
    line(k, margin, k, 2970 + margin);
  }

  for (let i = 0; i < 128; i++){

    if(i % patternLength == 0){
      circleradius = 60;
    } else {
      circleradius = 30;
    };

    if (circX >= measureLength + margin){ 
      circX -= measureLength;
      circY += verticalgap;


      if(round(circX) == margin && i % patternLength == 0){
        break;
      } else {
      circle(circX, circY, circleradius);
      circX += noteLength;
      }

    } else {
    circle(circX, circY, circleradius);
    circX += noteLength;
    };
  
    if(i % patternLength == 0 && circX == margin){
      break;
    }


  }
  






























  
  // //draw points
  // for (let i = 0; i < 256; i++) {
  // if (rowPoint < steps) {
  //       if (i % patternLength == 0) {
  //         circle(margin + rowPoint * measureLength/steps, y, 50);
  //         rowPoint++;
  //       } else {
  //         circle(margin + rowPoint * measureLength/steps, y, 25);
  //         rowPoint++;
  //       }
  //     } else {
  //       y += verticalgap;
  //       rowPoint = 0;
  //       if (i % patternLength == 0) {
  //         break;
  //       } else {
  //         circle(margin + rowPoint * measureLength/steps, y, 25);
  //         rowPoint++;
  //       }
  //     }
  //   }
}
