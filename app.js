console.log("starting play video");
 {/* get video */}
var video = document.getElementById("video_presentation");

var btn = document.getElementById("btn");

//pause video and change btn text
function playFunction(){
if(video.paused){
video.play();
btn.innerHTML = "Pause";
}
else{
video.pause();
btn.innerHTML = "Play";
}
}
