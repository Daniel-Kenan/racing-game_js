function six(){
    
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

// const resetgame = () => null;



  

setInterval(()=>{
if(test_move){laneBpos += 1 ;carWidth += 13; carHeight+=5 ;
laneB.style.top = `${laneBpos}%`;
laneB.style.width = `${carWidth}px`;
laneB.style.height = `${carHeight}px`;
 if (laneBpos == 48 || laneBpos < 35){laneB.style.display = 'none'}else{setTimeout(()=>{
    laneB.style.display = 'block' ;
 },1000)}}

},1000)

}