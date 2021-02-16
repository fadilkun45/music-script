let load = document.querySelector('.bar-music');
let musik = ["musik1.mp3","musik2.mp3","musik3.mp3"];
let judul = ["Literature reina ueda","haiiro no saga","Endless Tear"];
let songtitle = document.querySelector("#judul");
let currentTime = document.querySelector("#timer");
let musicdisplay = document.querySelectorAll(".music-box");


let audio = new Audio();
let currentsong = 0 ;
window.onload = setelmusic;



musicdisplay[0].addEventListener("click",function(){
    currentsong = 0 ;
    setelmusic()
    songtitle.innerHTML = judul[currentsong];
    let playbtn = document.querySelector(".play-pause");
    playbtn.innerHTML = '<i class="fa fa-pause"></i>'; 
})

musicdisplay[1].addEventListener("click",function(){

    currentsong = 1 ;
    setelmusic()
    songtitle.innerHTML = judul[currentsong];
    let playbtn = document.querySelector(".play-pause");
    playbtn.innerHTML = '<i class="fa fa-pause"></i>'; 
})

musicdisplay[2].addEventListener("click",function(){

    currentsong = 2 ;
    setelmusic()
    songtitle.innerHTML = judul[currentsong];
    let playbtn = document.querySelector(".play-pause");
    playbtn.innerHTML = '<i class="fa fa-pause"></i>'; 
})



function setelmusic() {
    audio.src = musik[currentsong];
    audio.play();
}

function playmusic () {
    if (audio.paused) {
        audio.play();
        let playbtn = document.querySelector(".play-pause");
        playbtn.innerHTML = '<i class="fa fa-pause"></i>'; 
    }else {
        audio.pause();
        let playbtn = document.querySelector(".play-pause");
        playbtn.innerHTML = '<i class="fa fa-play"></i>';
    }
}

function convertTime(seconds){
    let min = Math.floor(seconds / 60 );
    let sec = seconds % 60 ;
    min = min < 10 ? '0' + min : min ;
    sec = sec < 10 ? '0' + sec : sec ;
    currentTime.textContent = min + " : " + sec ;
  
    totaltime(Math.round(audio.duration));
}
  
function totaltime(seconds){
    let min = Math.floor(seconds / 60 );
    let sec = seconds % 60 ;
    min = min < 10 ? '0' + min : min ;
    sec = sec < 10 ? '0' + sec : sec ;
    currentTime.textContent += " & " + min + ':' + sec ;
}

audio.addEventListener("timeupdate", function() {
    let position = audio.currentTime / audio.duration;
    load.style.width = position * 100 + "%";
    convertTime(Math.round(audio.currentTime));
  
  
    if(audio.ended){
      nextmusic()
    }
});

function nextmusic (){
    currentsong++;
    if(currentsong > 2 ){
      currentsong = 0 ;
    }
    setelmusic()
    songtitle.innerHTML = judul[currentsong];
    let playbtn = document.querySelector(".play-pause");
    playbtn.innerHTML = '<i class="fa fa-pause"></i>';  
}

function prevmusic (){
    currentsong--;
    if(currentsong > 0 ){
      currentsong = 2 ;
    }
    setelmusic()
    songtitle.innerHTML = judul[currentsong];
    let playbtn = document.querySelector(".play-pause");
    playbtn.innerHTML = '<i class="fa fa-pause"></i>';  
}