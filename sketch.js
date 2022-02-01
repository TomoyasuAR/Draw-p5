let checkBG;
let sliderBgHue, sliderBgSat, sliderBgBri;
let checkBgHue, checkBgSat, checkBgBri;
let bgHue, bgSat, bgBri;
let bgHueCount = 0;
let bgSatCount = 0;
let bgBriCount = 0;

let checkStroke;
let strokeWeightAmount, checkStrokeWeightAuto;
let strokeWeigthCount = 0;
let sliderStrokeHue, sliderStrokeSat, sliderStrokeBri, sliderStrokeAlpha;
let checkStrokeHue, checkStrokeSat, checkStrokeBri, checkStrokeAlpha;
let strokeHue, strokeSat, strokeBri, strokeAlpha;
let strokeHueCount = 0;
let strokeSatCount = 0; 
let strokeBriCount = 0; 
let strokeAlphaCount = 0;

let checkFill;
let sliderFillHue, sliderFillSat, sliderFillBri, sliderFillAlpha;
let checkFillHue, checkFillSat, checkFillBri, checkFillAlpha;
let fillHue, fillSat, fillBri, fillAlpha;
let fillHueCount = 0;
let fillSatCount = 0; 
let fillBriCount = 0; 
let fillAlphaCount = 0;

let sliderSize;
let sizeCount;
let size;
let checkScaleAuto;
let scaleAutoCount = 0;

let loopArray =[];
let loopArrayAmount = 200;

let totalShapes;
let checkShapeRepeat;

let sliderRotate;
let sliderRotateAuto;
let rotateAutoAmount = 0;

let positionX, sliderPositionX, checkPositionXAuto;
let positionXCount = 0;
let positionY, sliderPositionY, checkPositionYAuto;
let positionYCount = 0;

let selectShape;


let canvasXY= 700;
let halfCanvas;
let sliderFirstCol = canvasXY +150
let sliderSecondCol = sliderFirstCol +190
let sliderFirstRow = 50;
let paintMode;
let saveImage;

let buttonStartRecord;
let startRecord = false;
let loopRecord = false;
let buttonEndRecord;
let endRecord = false;
let recordText;
let recordFrameCount = 0;
let recordTotalFrames = 60 * 1;

var song;
let canvasForPosition;
let canvasPadding;
let printCanvas;
let totalLines = 34;

let test = 0;
 


function setup() {

  //================================================= GENERAL SETTINGS
  canvasXY = windowHeight/100*95;
  halfCanvas = -canvasXY/2;
  canvasPadding = (windowHeight-canvasXY)/2;
  canvasForPosition = createCanvas(canvasXY, canvasXY);
  canvasForPosition.parent('#canvas');
  //noCanvas();
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);
  printCanvas = createP("Your canvas is "+ canvasXY + "px * " + canvasXY + "px.");
  printCanvas.position(canvasXY/2,canvasXY/2);
  print("Window Width = "+ windowWidth + "; canvasXY = "+canvasXY+"; Canvas Width = " + width );
  print("Window Height = "+ windowHeight + "; Canvas Height = " + height + "; Half Canvas = " + halfCanvas);
  //song = loadSound("wirklichkeit.wav",loaded)


  //================================================= SLIDERS
  selectShape=createSelect('Change Shape');
    selectShape.option('Circle');
    selectShape.option('Oval');
    selectShape.option('Semicircle');
    selectShape.option('Line');
    selectShape.option('Square');
    selectShape.option('Rhombus');
    selectShape.option('Rectangle');
    selectShape.option('Trapezoid');
    selectShape.option('Parallelogram');
    selectShape.option('Cross');
    selectShape.option('Triangle');
    selectShape.option('Star');
    selectShape.option('Pentagon');
    selectShape.option('Hexagon');
    selectShape.option('Octagon');
    selectShape.selected('Circle');
  sliderSize = createSlider(10, height,height-3.5,0.00001);
  sliderRotate = createSlider(0, 360,0,0.01);
  sliderRotateAuto = createSlider(0,25,0,0.01);
  sliderBgHue = createSlider(0,360,100)
  sliderBgSat = createSlider(0,100,30)
  sliderBgBri = createSlider(0,100,0)
  sliderStrokeAmount = createSlider(0,0.5,0.005,0.0001)
  sliderStrokeHue = createSlider(0,360,200);
  sliderStrokeSat = createSlider(0,100,30);
  sliderStrokeBri = createSlider(0,100,100);
  sliderStrokeAlpha = createSlider(0,1,1,0.0001);
  sliderFillHue = createSlider(0,360,360);
  sliderFillSat = createSlider(0,100,100);
  sliderFillBri = createSlider(0,100,20);
  sliderFillAlpha = createSlider(0,1,1,0.0001);
  sliderPositionX = createSlider(0, 1, 0.5,  0.05)
  sliderPositionY = createSlider(0, 1, 0.5, 0.05)

  //=================================================CHECKBOXES
  checkShapeRepeat = createCheckbox(' Repeat', false);
  checkScaleAuto = createCheckbox(' Automate', false);
  checkBG = createCheckbox (' Enable',false);
  checkBgHue = createCheckbox(' Automate', false)
  checkBgSat = createCheckbox(' Automate', false)
  checkBgBri = createCheckbox(' Automate', false)
  checkStroke = createCheckbox(' Enable', true);
  checkStrokeWeightAuto = createCheckbox(' Automate', false)
  checkStrokeHue = createCheckbox(' Automate', false);
  checkStrokeSat = createCheckbox(' Automate');
  checkStrokeBri = createCheckbox(' Automate');
  checkStrokeAlpha = createCheckbox(' Automate');
  checkFill = createCheckbox(' Enable', false)
  checkFillHue = createCheckbox(' Automate', false);
  checkFillSat = createCheckbox(' Automate');
  checkFillBri = createCheckbox(' Automate');
  checkFillAlpha = createCheckbox(' Automate',false);
  checkPositionXAuto = createCheckbox(' Automate', false)
  checkPositionYAuto = createCheckbox(' Automate', false);
  paintMode = createCheckbox(' PAINT MODE', false);
 
  saveImage = createButton('Save Image');
  saveImage.mousePressed(downloadImage);
  buttonStartRecord = createButton('Start Videorecord');
  buttonStartRecord.mousePressed(startRecordF);
  buttonEndRecord = createButton('End Videorecord');
  buttonEndRecord.mousePressed(endRecordF);
  recordText = select('#l32');

  //=================================================POSITION SLIDERS
  selectShape.parent('#2');
  sliderSize.parent('#4');  
  sliderRotate.parent('#6');
  sliderRotateAuto.parent('#7');
  sliderBgHue.parent('#10');
  sliderBgSat.parent('#11');
  sliderBgBri.parent('#12');
  sliderStrokeAmount.parent('#15');
  sliderStrokeHue.parent('#16');
  sliderStrokeSat.parent('#17');
  sliderStrokeBri.parent('#18');
  sliderStrokeAlpha.parent('#19')
  sliderFillHue.parent('#22');
  sliderFillSat.parent('#23');
  sliderFillBri.parent('#24');
  sliderFillAlpha.parent('#25');
  sliderPositionX.parent('#27');
  sliderPositionY.parent('#28');
  //=================================================POSITION CHECKBOXES
  checkShapeRepeat.parent('#c2');
  checkScaleAuto.parent('#c4');
  checkBG.parent('#c9');
  checkBgHue.parent('#c10');
  checkBgSat.parent('#c11');
  checkBgBri.parent('#c12');
  checkStroke.parent('#c14');
  checkStrokeWeightAuto.parent('#c15');
  checkStrokeHue.parent('#c16');
  checkStrokeSat.parent('#c17');
  checkStrokeBri.parent('#c18');
  checkStrokeAlpha.parent('#c19');
  checkFill.parent('#c21');
  checkFillHue.parent('#c22');
  checkFillSat.parent('#c23');
  checkFillBri.parent('#c24');
  checkFillAlpha.parent('#c25');
  checkPositionXAuto.parent('#c27');
  checkPositionYAuto.parent('#c28');

  paintMode.parent('#c30');
  saveImage.parent('#30');
  buttonStartRecord.parent('#32');
  buttonEndRecord.parent('#c32');

  //=================================================CALCULATION

  totalShapes= int(map(canvasXY,724,1110,52,80));
  loopArrayF(); //Fills my Loop Values
  
  
  if(checkBG.checked()===true){
    background(sliderBgHue.value(),sliderBgSat.value(),sliderBgBri.value());
  }else{
    clear();
  }
}

function loaded (){
  song.setVolume(0.2)
  song.play();
}


function draw(){

  if(frameCount>=60*3){
    printCanvas.html("Have Fun!");
    if(frameCount>=60*4){
      printCanvas.html("");
    }
  }

  translate(width/2, height/2);

  //**************************************** */ START RECORD
    if(startRecord === true){
      capturer.start();
      loopRecord = true;
      startRecord = false;
      recordFrameCount = 0;
    }

  //**************************************** */ POSITION
  if(checkPositionXAuto.checked()===true){
    positionX = lerp(-canvasXY,canvasXY,loopArray[positionXCount]);
    positionXCount++;
    if(positionXCount >= loopArray.length){
      positionXCount = 0;
    }
  }else{
    positionX = lerp(-canvasXY,canvasXY,sliderPositionX.value());
  }
  if(checkPositionYAuto.checked()===true){
    positionY = lerp(-canvasXY,canvasXY,loopArray[positionYCount]);
    positionYCount++;
    if(positionYCount >= loopArray.length){
      positionYCount = 0;
    }
  }else{
    positionY = lerp(-canvasXY,canvasXY,sliderPositionY.value());
  }
  translate(positionX,positionY)

  //**************************************** */ STROKE WEIGHT
  if(checkStrokeWeightAuto.checked()===true){
    strokeWeightAmount = lerp(0,0.5,loopArray[strokeWeigthCount]);
    strokeWeigthCount++;
    if(strokeWeigthCount >= loopArray.length){
      strokeWeigthCount = 0;
    }
  }else{
    strokeWeightAmount = sliderStrokeAmount.value();
  }
  strokeWeight(strokeWeightAmount);

  //**************************************** */ BG COLOR
  if(paintMode.checked()==false){
    //HUE
    if(checkBgHue.checked()==true){
      bgHue = loopArray[bgHueCount]*360;
      bgHueCount++;
      if(bgHueCount >= loopArray.length){
        bgHueCount = 0;
      }
    }else{
      bgHue = sliderBgHue.value();
    }
    //SATURATION
    if(checkBgSat.checked()==true){
      bgSat = loopArray[bgSatCount]*100;
      bgSatCount++;
      if(bgSatCount >= loopArray.length){
        bgSatCount = 0;
      }
    }else{
      bgSat = sliderBgSat.value();
    }
    //BRIGHTNESS
     if(checkBgBri.checked()==true){
      bgBri = loopArray[bgBriCount]*100;
      bgBriCount++;
      if(bgBriCount >= loopArray.length){
        bgBriCount = 0;
      }
    }else{
      bgBri = sliderBgBri.value();
    }
    if(checkBG.checked()===true){
      background(bgHue,bgSat,bgBri);
    }else{
      clear();
    }
  }
  



  

  //**************************************** */ STROKE COLOR
  //HUE


  if(checkStrokeHue.checked()==true){
    strokeHue = loopArray[strokeHueCount]*360;
    strokeHueCount++;
    if(strokeHueCount >= loopArray.length){
    strokeHueCount = 0;
    }
  }else{
    strokeHue = sliderStrokeHue.value();
  }
  //Saturation
  if(checkStrokeSat.checked()==true){
    strokeSat = loopArray[strokeSatCount]*100;
    strokeSatCount++;
    if(strokeSatCount >= loopArray.length){
      strokeSatCount = 0;
    }
  }else{
    strokeSat = sliderStrokeSat.value();
  }
  //Brightness
  if(checkStrokeBri.checked()==true){
    strokeBri = loopArray[strokeBriCount]*100;
    strokeBriCount++;
    if(strokeBriCount >= loopArray.length){
      strokeBriCount = 0;
    }
  }else{
    strokeBri = sliderStrokeBri.value();
  }
  //ALPHA
  if(checkStrokeAlpha.checked()==true){
    strokeAlpha = loopArray[strokeAlphaCount];
    strokeAlphaCount++;
    if(strokeAlphaCount >= loopArray.length){
      strokeAlphaCount = 0;
    }
  }else{
    strokeAlpha = sliderStrokeAlpha.value();
  }
  if(checkStroke.checked()===false){
    noStroke();
  }else{
    stroke(strokeHue,strokeSat,strokeBri,strokeAlpha);
  }

  //**************************************** */ FILL COLOR
  //HUE
  if(checkFillHue.checked()==true){
    fillHue = loopArray[fillHueCount]*360;
    fillHueCount++;
    if(fillHueCount >= loopArray.length){
    fillHueCount = 0;
    }
  }else{
    fillHue = sliderFillHue.value();
  }
  //Saturation
  if(checkFillSat.checked()==true){
    fillSat = loopArray[fillSatCount]*100;
    fillSatCount++;
    if(fillSatCount >= loopArray.length){
      fillSatCount = 0;
    }
  }else{
    fillSat = sliderFillSat.value();
  }
  //Brightness
  if(checkFillBri.checked()==true){
    fillBri = loopArray[fillBriCount]*100;
    fillBriCount++;
    if(fillBriCount >= loopArray.length){
      fillBriCount = 0;
    }
  }else{
    fillBri = sliderFillBri.value();
  }
  //ALPHA
  if(checkFillAlpha.checked()==true){
    fillAlpha = loopArray[fillAlphaCount];
    fillAlphaCount++;
    if(fillAlphaCount >= loopArray.length){
      fillAlphaCount = 0;
    }
  }else{
    fillAlpha = sliderFillAlpha.value();
  }
  if(checkFill.checked()===false){
    noFill();
  }else{
    fill(fillHue,fillSat,fillBri,fillAlpha);
  }

  
  //**************************************** */ SCALE
  if(checkScaleAuto.checked()==true){
    size = lerp(10, height,loopArray[scaleAutoCount] )
    scaleAutoCount++;
  
    
    if(scaleAutoCount >= loopArray.length){
      scaleAutoCount = 0;
    }
    
  }else{
    size = sliderSize.value();
  }

  scale(size,size);

  //**************************************** */ ROTATE
  if (sliderRotateAuto.value() > 0){
    rotateAutoAmount = rotateAutoAmount + sliderRotateAuto.value();
  }
  rotate(rotateAutoAmount);
  rotate(sliderRotate.value());


  //**************************************** */ SHAPE

  if(checkShapeRepeat.checked()==false){
    shape(0,0);
  }
  if(checkShapeRepeat.checked()==true){
    for(let moveX= -totalShapes; moveX <= totalShapes; moveX++){
      for(let moveY = -totalShapes; moveY <= totalShapes; moveY++){
        push();
        translate(moveX,moveY);
        shape();
        pop();
      }
    }
  }
  
  //**************************************** */ RECORD END

  if(loopRecord === true){
    capturer.capture(canvas);
    recordText.html("Recording Frame " + recordFrameCount);
    recordFrameCount++;

  }
  if(endRecord === true){ 
    capturer.save()
    capturer.stop()
    loopRecord = false;
    endRecord = false;
    recordText.html("Click to Start Record!");
  }

}


function shape (){
  

  
  //**************************************** */ SHAPE

  if(selectShape.value()=='Circle'){    
    ellipse(0,0, 1,1);
    
  }
  if(selectShape.value()=='Oval'){
    ellipse(0,0,0.5,1);
  }
  if(selectShape.value()=='Semicircle'){
    arc(0,0,1,1,90,90*3)
  }
  if(selectShape.value()=='Line'){  
    line(-0.5,-0.5, 0.5,0.5);
  }
  if(selectShape.value()=='Square'){
    rect(0,0, 1,1);
  }
  if(selectShape.value()=='Rhombus'){  
    //Rhombus
    beginShape();
    vertex(0,-0.5);
    vertex(0.35,0);
    vertex(0,0.5)
    vertex(-0.35,0);
    endShape(CLOSE);
  }
  if(selectShape.value()=='Rectangle'){
    rect(0,0, 1,0.5);
  }
  if(selectShape.value()=='Trapezoid'){  
    //TRAPEZ
    quad(-0.25,-0.35,  0.25,-0.35,  0.5,0.35, -0.5,0.35);
  } 
  if(selectShape.value()=='Parallelogram'){  
    //Parallelogramm
    beginShape();
    vertex(-0.17,-0.33);
    vertex(0.5,-0.33);
    vertex(0.17,0.33)
    vertex(-0.5,0.33);
    endShape(CLOSE);
  }  
  if(selectShape.value()=='Cross'){  
    //Kreuz
    beginShape();
    vertex(-0.25,-0.5);
    vertex(0.25,-0.5);
    vertex(0.25,-0.25)
    vertex(0.5,-0.25);
    vertex(0.5,0.25);
    vertex(0.25,0.25);
    vertex(0.25,0.5);
    vertex(-0.25,0.5);
    vertex(-0.25,0.25);
    vertex(-0.5,0.25);
    vertex(-0.5,-0.25);
    vertex(-0.25,-0.25);
    endShape(CLOSE);
  }
  if(selectShape.value()=='Triangle'){  
    var hoehe = sqrt(0.75);
    var y1 = lerp(0.5,-0.5,hoehe);
    var r = 0.5 - (1 / (2 * sqrt(3)));
    triangle(0, y1-r, 0.5, 0.5-r, -0.5, 0.5-r);
  }
  
  if(selectShape.value()=='Star'){  
    //STAR
    beginShape();
    vertex(0,-0.5);
    vertex(0.11,-0.15);
    vertex(0.48,-0.15)
    vertex(0.18,0.06);
    vertex(0.29,0.41);
    vertex(0,0.19);
    vertex(-0.29,0.41);
    vertex(-0.18,0.06);
    vertex(-0.48,-0.15);
    vertex(-0.11,-0.15);
    endShape(CLOSE);
  }
  if(selectShape.value()=='Pentagon'){  
    //Pentagon
    beginShape();
    vertex(0,-0.48);
    vertex(0.47,-0.15);
    vertex(0.29,0.4)
    vertex(-0.29,0.4);
    vertex(-0.47,-0.15);
    endShape(CLOSE);
  }
  if(selectShape.value()=='Hexagon'){  
    //Hexagon
    beginShape();
    vertex(-0.25,-0.43);
    vertex(0.25,-0.43);
    vertex(0.5,0)
    vertex(0.25,0.43);
    vertex(-0.25,0.43);
    vertex(-0.5,0);
    endShape(CLOSE);
  }
  if(selectShape.value()=='Octagon'){  
    //Octagon
    beginShape();
    vertex(-0.21,-0.5);
    vertex(0.21,-0.5);
    vertex(0.5,-0.21)
    vertex(0.5,0.21);
    vertex(0.21,0.5);
    vertex(-0.21,0.5);
    vertex(-0.5,0.21);
    vertex(-0.5,-0.21);
    endShape(CLOSE);
  }

}


function downloadImage(){
  save(hour() + "-" + minute() + "-" + second() + ".png");
}

function loopArrayF(){
  let i = 0;
  let j = 0;

  while( j < loopArrayAmount){ 
    loopArray[i] = j/loopArrayAmount;
    i++;
    j++;
  } while ( j > 0){
    loopArray[i] = j/loopArrayAmount;
    i++;
    j--;
  }
}

function startRecordF(){
  startRecord = true;
}
function endRecordF(){
  endRecord = true;
}
