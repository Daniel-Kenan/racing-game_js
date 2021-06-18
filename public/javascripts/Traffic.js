function six(){
    
function iscollision(user_car, traffic_car) {
    const horizontal_position = (user_car.x1 - traffic_car.x1) ** 2 ;
    const vertical_position =  (user_car.y1 - traffic_car.y1) ** 2;
    let hypot = Math.sqrt(vertical_position + horizontal_position)
    if (hypot <= 20  ){ 
               // alert('collision')
    }
}

    var user_car ,traffic_car ;

console.trace('this file')
setInterval(()=>{
    user_car = { x1 : position , y1 : 57 , width : 27 , height : 42.5};
    traffic_car = {x1:51.5, y1:laneBpos , width:carWidth , height : carHeight};
    

if(test_move){
  laneBpos += 1.4 ;carWidth += 10; 
  laneB.style.top = `${laneBpos}%`;
if (carWidth < 28 ) laneB.style.width = `${20}%`; 
    laneB.style.height = `auto`


//   console.log(traffic_car)       
  iscollision(user_car ,traffic_car)
    // alert(laneBpos)
}},750)

}


// lane B car 
setInterval(()=>{
    if (laneBpos <= 29 || laneBpos  > 53.5){laneB.style.display = 'none';laneB.removeAttribute('src'); laneB.setAttribute('src' , game_cars.sort(()=> Math.random()-0.5)[0] ) }else{
        laneB.style.display = 'block' ;
     }
     
},10)

// laneAcar
setInterval(()=>{
    if (laneApos <= 29 || laneApos  > 53.5){laneA.style.display = 'none';laneA.removeAttribute('src'); laneA.setAttribute('src' , game_cars.sort(()=> Math.random()-0.5)[0] ) }else{
        laneA.style.display = 'block' ;
     }
},10)