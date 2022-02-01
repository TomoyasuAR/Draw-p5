let sArray = [];
let para;

function setup(){


    for(let i = 0; i < 30; i++){
        sArray[i] = i+1;
    }

    para = createP ("Hello World!");
    para.parent('#c'+ sArray[9]);
    print(sArray);

}
function draw(){

}