const road = document.getElementById('road'),
    
    car = document.getElementById("car"),
    speed = document.getElementById('speedometer'), 
    distance =  document.getElementById('distance'),
    Developer = document.getElementById('developer'), 
    counter = document.getElementById('trafficLight'),
    light = document.getElementById('light');
    const game_cars = ['images/cars/audi.png','images/cars/chevrolet.png','images/cars/mini.png','images/cars/van.png'];   




var up = 'w', right = 'd' , down = 's', left = 'a', fullscreen = 'f', position = 20;

road.style.height = `${innerHeight}px`;
car.style.left = `${position}%`;


var velocity   =  0;
var handling = 0 ;
var i = 0 ;
var test_move = null ;
var displacement = 0 ;
const laneA = document.getElementsByClassName('lane-A')[0],
      laneB = document.getElementsByClassName('lane-B')[0];

var laneBpos = 35 , carWidth  = 50 , carHeight = carWidth + 4;

function one(){
   setInterval(()=>{
    speed.innerHTML = `${velocity} km/h`;
    distance.innerText = `${displacement} km`
    i += 1 ;
    if(handling > 2 && velocity < 260) velocity = i;
    if(i > 260) i -= 4 , velocity = i;
    if(handling == 0){ i -= 1 }
}, 100) 


}


