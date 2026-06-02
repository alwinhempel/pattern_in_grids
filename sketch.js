let linelength = 1600;
let verticalgap = 100;
let margin = 100;

let steps = 24;
let patternLength = 5;
let duration = 1;
let rowPoint = 0;
let pulse = 4;
let y = margin;

function setup() {
  createCanvas(2100, 2970);
  background(255);
  stroke("magenta");
  strokeWeight(2);

  //vertical grid
  for (let j = margin; j < 2970; j += verticalgap) {
    line(margin, j, linelength + margin, j);
  }
  
  //horizontal grid
  for (let k = margin; k <= linelength; k += margin * pulse){
    line(k, margin, k, linelength + margin);
  }

  
  //draw points
  for (let i = 0; i < 256; i++) {
  if (rowPoint < steps) {
        if (i % patternLength == 0) {
          circle(margin + rowPoint * linelength/steps, y, 50);
          rowPoint++;
        } else {
          circle(margin + rowPoint * linelength/steps, y, 25);
          rowPoint++;
        }
      } else {
        y += verticalgap;
        rowPoint = 0;
        if (i % patternLength == 0) {
          break;
        } else {
          circle(margin + rowPoint * linelength/steps, y, 25);
          rowPoint++;
        }
      }
    }
}
