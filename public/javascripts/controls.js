
void
function Controls() {
    addEventListener("keydown", (e) => {

        if (e.key == left && position > 11 )
            position -= handling,
            car.style.left = `${position}%`;

        if (e.key == right && position < 50.5 )
            position += handling,
            car.style.left = `${position}%`;

        if (e.key == down)
            car.setAttribute('src', 'images/cars/nissan gtr/rear_brake.png'), handle('decrease');

        if (e.key == fullscreen)
            document.querySelector('body').requestFullscreen(),
            road.style.height = `${innerHeight}px`,
            car.style.top = `${innerHeight - (innerHeight*40/100)}px`;
        if (handling == 0) {
            road.setAttribute('src', 'images/road/static-road.jpeg'); i = 0 ;
            
        }
    })
    addEventListener('keyup', (e) => {
        if (e.key == down) road.setAttribute('src', 'images/road/road.gif');
        if (e.key == down) car.setAttribute('src', 'images/cars/nissan gtr/rear.png'), handle('increase');
    })
}();