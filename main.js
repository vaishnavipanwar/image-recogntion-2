Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    image_quality:90
})

var camera=document.getElementById("camera");
Webcam.attach("#camera")
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}
console.log("ml5 version ="+ml5.version);
var classifier=ml5.imageClassifier(modelLoaded)

function modelLoaded(){
    console.log("model is loaded");
}

function check(){
    var image=document.getElementById("capture_image");
    classifier.classify(image, gotresults);
}

function gotresult(error , results){
if (error){ 
    console.log(error);
}
else {
    console.log(results);
    document.getElementById("accuracy" ).innerHTML=results[0].confidence;
    document.getElementById("object").innerHTML=results[0].label;
}
}