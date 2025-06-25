//document.addEventListener("DOMContentLoaded",function(){
let gameseq=[];
let userseq=[];

let score = 0;
let btns=["yellow","red","purple","green"];
let h2 = document.querySelector("h2");
let started = false;
let level = 0;
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started= true;
        levelup();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");

    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");

    },250);
}
function levelup() {
    userseq=[];
level++;
score++;
h2.innerText=`level ${level}`;
let ranIdx = Math.floor(Math.random() *4);
let randColor = btns[ranIdx];
let ranBtn = document.querySelector(`.${randColor}`);
gameseq.push(randColor)
console.log(gameseq);

btnFlash(ranBtn);
} 
let max = 0
function checkAns(idx){
//console.log("curr level : ",level);
//let idx = level-1;
if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
    }
    

}else{
    if(score > max){
        max=score;
        
    }
     
score=0; 
    h2.innerHTML = `Game over ! Your score was <b>${level}</b> <br> Press any key to start <br> max score is ${max}`;
    document.querySelector("body").style.backgroundcolor="red";
 setTimeout(function(){
        document.querySelector("body").style.backgroundcolor="white";

 },150);
reset();
}}
function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}
   function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level=0;}

