let gamerSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["yellow","red","green","purple"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started = true;
        levelUp();
    }
});
function buttonflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 300);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let rand = Math.floor(Math.random() * 3);
    let randColor = btns[rand];
    let randButtons = document.querySelector(`.${randColor}`);
    gamerSeq.push(randColor);
    console.log(gamerSeq);
    buttonflash(randButtons);
}
function checkAns(idx){
    if(userSeq[idx]==gamerSeq[idx]){
        if(userSeq.length == gamerSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game over! Your score is <b>${level}<b> <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function buttonsPress(){
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",buttonsPress)
}
function reset(){
    started = false;
    userSeq = [];
    gamerSeq = [];
    level = 0;
}