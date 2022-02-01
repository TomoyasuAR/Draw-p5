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
let totalLines = 34;

let test = 0;
 


function setup() {
  canvasXY = windowHeight/100*95;
  halfCanvas = -canvasXY/2;
  canvasPadding = (windowHeight-canvasXY)/2;
  canvasForPosition = createCanvas(canvasXY, canvasXY);
  //canvasForPosition.position(canvasPadding,canvasPadding );
  canvasForPosition.parent('#canvas');
  //noCanvas();
  
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);
  print("Window Width = "+ windowWidth + "; canvasXY = "+canvasXY+"; Canvas Width = " + width );
  print("Window Height = "+ windowHeight + "; Canvas Height = " + height + "; Half Canvas = " + halfCanvas);
  //song = loadSound("wirklichkeit.wav",loaded)

  //frameRate(60);

  // SIZE
  sliderSize = createSlider(10, height,height/2,0.00001);
  //sliderSize.position(sliderFirstCol,sliderFirstRow);
  sliderSize.parent('#scale');
  checkScaleAuto = createCheckbox('Automate', false);
  //checkScaleAuto.position(sliderSecondCol,sliderFirstRow);
  checkScaleAuto.parent('#checkscale');

  sliderBgHue = createSlider(0,360,100)
  //sliderBgHue.position(sliderFirstCol,sliderFirstRow+40)
  sliderBgHue.parent('#background1');
  sliderBgSat = createSlider(0,100,30)
  //sliderBgSat.position(sliderFirstCol,sliderFirstRow+60)
  sliderBgSat.parent('#background');
  sliderBgBri = createSlider(0,100,0)
  //sliderBgBri.position(sliderFirstCol,sliderFirstRow+80)
  sliderBgBri.parent('#background');
  checkBG = createCheckbox ('Enable',true);
  //checkBG.position(sliderSecondCol,sliderFirstRow+20);
  checkBG.parent('#checkbackground');
  checkBgHue = createCheckbox('Automate', false)
  //checkBgHue.position(sliderSecondCol,sliderFirstRow+40)
  checkBgHue.parent('#checkbackground2');
  checkBgSat = createCheckbox('Automate', false)
  //checkBgSat.position(sliderSecondCol,sliderFirstRow+60)
  checkBgSat.parent('#checkbackground3');
  checkBgBri = createCheckbox('Automate', false)
  //checkBgBri.position(sliderSecondCol,sliderFirstRow+80)
  checkBgBri.parent('#checkbackground4');
  
  checkStroke = createCheckbox('Enable', true)
  //checkStroke.position(sliderSecondCol,sliderFirstRow+120)
  checkStroke.parent('#checkstroke');
  sliderStrokeAmount = createSlider(0,0.5,0.005,0.0001)
  //sliderStrokeAmount.position(sliderFirstCol,sliderFirstRow+140)
  sliderStrokeAmount.parent('#stroke');
  sliderStrokeHue = createSlider(0,360,200);
  //sliderStrokeHue.position(sliderFirstCol,sliderFirstRow+160);
  sliderStrokeHue.parent('#stroke');
  sliderStrokeSat = createSlider(0,100,30);
  //sliderStrokeSat.position(sliderFirstCol,sliderFirstRow+180);
  sliderStrokeSat.parent('#stroke');
  sliderStrokeBri = createSlider(0,100,100);
  //sliderStrokeBri.position(sliderFirstCol,sliderFirstRow+200);
  sliderStrokeBri.parent('#stroke');
  sliderStrokeAlpha = createSlider(0,1,1,0.0001);
  //sliderStrokeAlpha.position(sliderFirstCol,sliderFirstRow+220);
  sliderStrokeAlpha.parent('#stroke')
  checkStrokeWeightAuto = createCheckbox('Automate', false)
  //checkStrokeWeightAuto.position(sliderSecondCol,sliderFirstRow+140)
  checkStrokeWeightAuto.parent('#checkstroke');
  checkStrokeHue = createCheckbox('Automate', false);
  //checkStrokeHue.position(sliderSecondCol ,sliderFirstRow+160);
  checkStrokeHue.parent('#checkstroke');
  checkStrokeSat = createCheckbox('Automate');
  //checkStrokeSat.position(sliderSecondCol,sliderFirstRow+180);
  checkStrokeSat.parent('#checkstroke');
  checkStrokeBri = createCheckbox('Automate');
  //checkStrokeBri.position(sliderSecondCol,sliderFirstRow+200);
  checkStrokeBri.parent('#checkstroke');
  checkStrokeAlpha = createCheckbox('Automate');
  //checkStrokeAlpha.position(sliderSecondCol,sliderFirstRow+220);
  checkStrokeAlpha.parent('#checkstroke');

  checkFill = createCheckbox('Enable', true)
  //checkFill.position(sliderSecondCol,sliderFirstRow+260)
  checkFill.parent('#checkfill');
  sliderFillHue = createSlider(0,360,140);
  //sliderFillHue.position(sliderFirstCol,sliderFirstRow+280);
  sliderFillHue.parent('#fill');
  sliderFillSat = createSlider(0,100,100);
  //sliderFillSat.position(sliderFirstCol,sliderFirstRow+300);
  sliderFillSat.parent('#fill');
  sliderFillBri = createSlider(0,100,30);
  //sliderFillBri.position(sliderFirstCol,sliderFirstRow+320);
  sliderFillBri.parent('#fill');
  sliderFillAlpha = createSlider(0,1,1,0.0001);
  //sliderFillAlpha.position(sliderFirstCol,sliderFirstRow+340);
  sliderFillAlpha.parent('#fill');
  checkFillHue = createCheckbox('Automate', false);
  //checkFillHue.position(sliderSecondCol ,sliderFirstRow+280);
  checkFillHue.parent('#checkfill');
  checkFillSat = createCheckbox('Automate');
  //checkFillSat.position(sliderSecondCol,sliderFirstRow+300);
  checkFillSat.parent('#checkfill');
  checkFillBri = createCheckbox('Automate');
  //checkFillBri.position(sliderSecondCol,sliderFirstRow+320);
  checkFillBri.parent('#checkfill');
  checkFillAlpha = createCheckbox('Automate',false);
  //checkFillAlpha.position(sliderSecondCol,sliderFirstRow+340);
  checkFillAlpha.parent('#checkfill');

  sliderRotate = createSlider(0, 360,0,0.01);
  //sliderRotate.position(sliderFirstCol,sliderFirstRow+380);
  sliderRotate.parent('#rotation');
  sliderRotateAuto = createSlider(0,25,0,0.01);
  //sliderRotateAuto.position(sliderFirstCol,sliderFirstRow+400);
  sliderRotateAuto.parent('#rotation');

  sliderPositionX = createSlider(0, 1, 0.5,  0.05)
  //sliderPositionX.position(sliderFirstCol,sliderFirstRow+440)
  sliderPositionX.parent('#position');
  sliderPositionY = createSlider(0, 1, 0.5, 0.05)
  //sliderPositionY.position(sliderFirstCol,sliderFirstRow+460)
  sliderPositionY.parent('#position');
  checkPositionXAuto = createCheckbox('Automate', false)
  //checkPositionXAuto.position(sliderSecondCol,sliderFirstRow+440)
  checkPositionXAuto.parent('#checkposition');
  checkPositionYAuto = createCheckbox('Automate', false);
  //checkPositionYAuto.position(sliderSecondCol,sliderFirstRow+460)
  checkPositionYAuto.parent('#checkposition');

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
  //selectShape.position(sliderFirstCol,sliderFirstRow+500)
  selectShape.parent('#shape');

  totalShapes= int(map(canvasXY,724,1110,52,80));
  checkShapeRepeat = createCheckbox('Shape Repeat', true);
  //checkShapeRepeat.position(sliderSecondCol,sliderFirstRow+500);
  checkShapeRepeat.parent('#checkshape');
  
  paintMode = createCheckbox('Paint Mode', false);
  //paintMode.position(sliderSecondCol,sliderFirstRow+540);
  paintMode.parent('#checkpaint');
  
  saveImage = createButton('Save Image');
  //saveImage.position(sliderFirstCol,sliderFirstRow+580);
  saveImage.parent('#save');
  saveImage.mousePressed(downloadImage);

  buttonStartRecord = createButton('Start Videorecord');
  //buttonStartRecord.position(sliderFirstCol,sliderFirstRow+620);
  buttonStartRecord.parent('#record');
  buttonStartRecord.mousePressed(startRecordF);

  buttonEndRecord = createButton('End Videorecord');
  //buttonEndRecord.position(sliderSecondCol,sliderFirstRow+620);
  buttonEndRecord.parent('#checkrecord');
  buttonEndRecord.mousePressed(endRecordF);

  loopArrayF(); //Fills my Loop Values
  recordText = select('#recordText');
  
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
