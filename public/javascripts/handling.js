function handle(speed) {
    if (handling > 0 && speed == "decrease") {
        handling -= 0.5  ; --i;--i; i-=2 ;
        if(velocity%2 == 0 ) velocity *= 0.5 ;   
    }
    Developer.innerHTML = `${handling} - handling`;
};
