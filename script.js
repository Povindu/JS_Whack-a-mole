mole();
var moleHole;
var score=0;
var scoreboard = document.getElementById("scoreboard");
var holeStart;
var hideTimeOut;
var peekTimeOut;

function mole(){
    let randHole = Math.floor(Math.random() * 8) + 1;
    let tempname = "hole-" + randHole;
    console.log("tempname-"+tempname);
    let currentHole = document.getElementById(tempname);
    // currentHole.classList.toggle("ani-hit");
    if(currentHole.classList.contains('ani-hit')){
        currentHole.classList.remove("ani-hit");

    }
    if(currentHole.classList.contains('ani-hide')){
        currentHole.classList.remove("ani-hide");
    }    
    currentHole.classList.add("ani-mole");
    moleHole = tempname;
    // console.log("mole hole"+moleHole);
    
    hideTimeOut = setTimeout(hide, 1500);
}



function hit(holeID){
    let currentHole = document.getElementById(holeID);
    if (moleHole == holeID){
        if(currentHole.classList.contains('ani-hide')){
            currentHole.classList.remove("ani-hide");
        }
        if(currentHole.classList.contains('ani-mole')){
            currentHole.classList.remove("ani-mole");
    
        }
        currentHole.classList.add("ani-hit");
        score++;
        scoreboard.innerText = score;
        window.clearTimeout(hideTimeOut);
        let randTime = Math.floor(Math.random() * 2000);
        moleHole = 10;
        peekTimeOut = setTimeout(mole, randTime);
    }
    else{
        console.log("miss");
        console.log("Hole ID:" + holeID);
        console.log("Mole ID:" + moleHole);
    }
    
}


function hide(){
    let currentHole = document.getElementById(moleHole);
    if(currentHole.classList.contains('ani-mole')){
        currentHole.classList.remove("ani-mole");
    }
    if(currentHole.classList.contains('ani-hit')){
        currentHole.classList.remove("ani-hit");
    }
    currentHole.classList.add("ani-hide");
    let randTime = Math.floor(Math.random() * 2000);
    moleHole = 10;
    peekTimeOut = setTimeout(mole, randTime);

}