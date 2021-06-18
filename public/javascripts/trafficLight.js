function five(){
    setTimeout(() => {
        counter.style.display = 'none';
        light.style.display = "none";
        road.setAttribute('src', 'images/road/road.gif');
    
    }, 4610)
    
    setTimeout(() => {
        light.style.top = "17%";
        light.style.backgroundColor = "yellow";
    }, 3000)
    
    setTimeout(() => {
        light.style.top = "25.2%";
        light.style.backgroundColor = "green";
        test_move = true ;
    }, 4500);
    
    
    setInterval(()=>{
        if(!test_move){
    laneBpos -= 1 ;
    laneB.style.top = `${laneBpos}%`;
    laneB.style.width = `auto`;
    laneB.style.height = `${20}%`;
    
        }
    },500)
}