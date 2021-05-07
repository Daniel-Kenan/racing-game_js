function handle(speed) {
    if (handling > 0 && speed == "decrease") {
        handling -= 0.5  ; --i;--i; i-=2 ;
        if(velocity%2 == 0 ) velocity *= 0.5 ;   
    }
    Developer.innerHTML = `${handling} - handling`;
};
let displacement_interval = velocity ;
setInterval(()=>{
    if ( velocity > 0 ){
        displacement += 1/(velocity*0.5)*(velocity*0.049);
        displacement = parseFloat( displacement.toFixed(2)) ;
    }
},500)