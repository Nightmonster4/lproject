camera  = document.getElementById("camera");

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 90
});

var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start(){
    Recognition.start();
}

Recognition.onresult = function (event){

    console.log(event);

        speak();
    
    

} 

function speak(){

    var synth = window.speechSynthesis;

    speak_data = "Taking selfie in 5 seconds, give a ugly pose";

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);

    Webcam.attach(camera);

    setTimeout(function(){
        img_id="selfie1";
        take_selfie();
        speak_data = "Your selfie will be taken in 5 seconds";
        utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis)
    },5000);

    setTimeout(function(){
        img_id="selfie2";
        take_selfie();
        speak_data = "Your selfie will be taken in 10 seconds";
        utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis)
    },10000);

    setTimeout(function(){
        img_id="selfie3";
        take_selfie();
    },15000);
}
function take_selfie(){
    Webcam.snap(function(data_uri){
        if(img_id == "selfie1")
        document.getElementById("result").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';

        if(img_id == "selfie2")
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';

        if(img_id == "selfie3")
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    });
}

