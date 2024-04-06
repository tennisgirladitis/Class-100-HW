var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var Recognition = new SpeechRecognition();

function Start() {
    Recognition.start();
    document.getElementById("text_box").innerHTML = "";
    console.log("Start Function");
}

Recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML = content;
    console.log(content);
    if (content == "Take my selfie.") {
        console.log("Taking selfie...");
        speak();
    }

}

Camera = document.getElementById("camera");

Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpg_quality: 90
});

function speak() {


    var synth = window.speechSynthesis;
    Webcam.attach(Camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function () {
        img_id = "result1";
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function () {
        img_id = "result2";
        take_snapshot();
        speak_data = "Taking your next Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function () {
        img_id = "result3";
        take_snapshot();
    }, 15000);
}

function take_snapshot() {

    console.log(img_id);

    Webcam.snap(function (data_uri) {
        if (img_id == "result1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>';
        }

        if (img_id == "result2") {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>';
        }

        if (img_id == "result3") {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>';
        }

        console.log("Image was taken" + img_id);
    })

    console.log("take_snapshot function was called")
}

