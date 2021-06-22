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
           
    laneBpos -= 0.001 ;
    carWidth -= 0.1 ;
    carWidthA -= 0.3;
    laneApos += Math.random();
    laneB.style.top = `${laneBpos}%`;
    laneB.style.width = `${carWidth}%`;
    laneB.style.height = `auto`;
    laneApos -= Math.random() ;
    laneA.style.top = `${laneApos}%`;
    laneA.style.width = ` ${carWidthA}%`;
    laneA.style.height = `auto`;  
        }
    },10)
   setInterval(()=> {if(carWidth < 10){laneB.style.display = "none"}},10)
   setInterval(()=> {if(carWidthA < 10){laneA.style.display = "none"}},10)
}
