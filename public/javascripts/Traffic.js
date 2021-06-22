function six() {

    function iscollision(user_car, traffic_car) {
        const horizontal_position = (user_car.x1 - traffic_car.x1) ** 2;
        const vertical_position = (user_car.y1 - traffic_car.y1) ** 2;
        let hypot = Math.sqrt(vertical_position + horizontal_position)
        if (hypot <= 20) {
            location.href = "/game-over";
        }
    }

    var user_car, traffic_car, traffic_car_A ;

    console.trace('this file')
    setInterval(() => {
        user_car = {
            x1: position,
            y1: 57,
            width: 27,
            height: 42.5
        };
        traffic_car = {
            x1: 51.5,
            y1: laneBpos,
            width: carWidth,
            height: carHeight
        };
        traffic_car_A = {...traffic_car , y1: laneApos , height : carHeightA , carWidth : carWidthA}
        iscollision(user_car,traffic_car)
        iscollision(user_car,traffic_car_A)
        if (test_move) {
            laneBpos += 0.3;
            laneApos += 0.1;
           if (laneBpos >10)carWidth += 0.1;
           if (laneApos >10 && carWidthA < 20)carWidthA += 0.08; 
            laneA.style.top = `${laneApos}%`
            laneB.style.top = `${laneBpos}%`;
            if (carWidth) laneB.style.width = `${carWidth}%`;
            if(carWidthA) laneA.style.width = `${carWidthA}%`;
            laneB.style.height = `auto`
        }
    }, 10)

}

var spawnpos = [-10, -300, -50, -500, 10];

// lane B car 
setInterval(() => {
  
    // alert(laneBpos)
    if (laneBpos <= 28 || laneBpos > 53.5) {
        laneB.style.display = 'none';

        laneB.removeAttribute('src');
        laneB.setAttribute('src', game_cars.sort(() => Math.random() - 0.5)[0])

        if (laneBpos > 53.5)
            laneB.style.top = `${laneBpos = spawnpos.sort(()=> 
                Math.random() - 0.5)[0]}%`, carWidth = 10;
    } else {
        laneB.style.display = 'block';
    }

}, 1)

setInterval(() => {
   
    // alert(laneApos)
    if (laneApos <= 28 || laneApos > 53.5) {
        laneA.style.display = 'none';
        laneA.removeAttribute('src');
        laneA.setAttribute('src', game_cars.sort(() => Math.random() - 0.5)[0])

        if (laneApos > 53.5)
            laneA.style.top = `${laneApos = spawnpos.sort(()=> 
                Math.random() - 0.5)[0]}%`, carWidthA = 10;
    } else {
        laneA.style.display = 'block';
    }

}, 1)