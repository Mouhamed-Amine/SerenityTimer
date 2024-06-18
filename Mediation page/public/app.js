//methode de declare une fonction
const app = () =>{
const play=document.querySelector(".play");
const song=document.querySelector(".song");
const circle=document.querySelector(".moving-track circle");
const video=document.querySelector(".vid-container video");
const stop=document.querySelector(".stopbip");


//sounds
const sounds=document.querySelectorAll(".sound-picker button");
const time_select=document.querySelectorAll(".time-select button");
//time display
const time=document.querySelector(".display-time");

const outlinelength=circle.getTotalLength();
console.log(outlinelength);

// duration
let fakeduration=600;
circle.style.strokeDasharray=outlinelength;//strokedash array is svg property
circle.style.strokeDashoffset=outlinelength; // offset is for the  empty svg circle

//animate button sounds
sounds.forEach(sound=>{
    sound.addEventListener("click",function(){
song.src=this.getAttribute("data-sound");//they helped me a lot in js those data-sound in html
video.src=this.getAttribute("data-video");
backsound(song);
    });
});

//music
play.addEventListener("click",()=>{
backsound(song);
});





//time button click
time_select.forEach(option=>{
    option.addEventListener("click",function(){
        fakeduration=this.getAttribute("data-time");
time.textContent=`${Math.floor(fakeduration/60)}:${Math.floor(fakeduration%60)}`;
    });
});






const backsound = song =>{
    if(song.paused){
        song.play();
        video.play();
        play.src="./svg/pause.svg";
    }else{
        song.pause();
        video.play();
        play.src="./svg/play.svg";
    }

}
// we can animated  cercle
song.ontimeupdate=() =>{
let currentTime=song.currentTime;
let elapsed=fakeduration-currentTime;
let seconde = Math.floor(elapsed % 60);
let minutes=Math.floor(elapsed / 60);



//animated
let progress=outlinelength-(currentTime/fakeduration)*outlinelength;
circle.style.strokeDashoffset=progress;

//animate time
time.textContent=`${minutes}:${seconde}`;

if(currentTime>=fakeduration){
song.pause();
time.textContent=`${0}:${0}`;
video.pause();
stop.play();
play.src="./svg/play.svg";
}

}




}

app();