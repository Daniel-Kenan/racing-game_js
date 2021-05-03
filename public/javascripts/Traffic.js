/// 'use strict '

function iscollision(positions) {
    let {
        x1,
        x2,
        y1,
        y2
    } = positions;
    
    let hypot, RHS = (x1 - x2) ** 2 + (y1 - y2) ** 2;
    hypot = Math.sqrt(RHS);

    let bool = hypot <= 0 ? true : null
    return bool
}

const resetgame = () => null;

const laneA = document.getElementsByClassName('lane-A')[0],
      laneB = document.getElementsByClassName('lane-B')[0];

let laneBpos = 35 ;let carWidth  = 50 ; 

setInterval(()=>{
laneBpos += 1 ;carWidth += 16;
laneB.style.top = `${laneBpos}%`;
laneB.style.width = `${carWidth+2}px`;
laneB.style.height = `${carWidth+1}px`;
 if (laneBpos == 48 || laneBpos < 35){laneB.style.display = 'none'}
},1000)
