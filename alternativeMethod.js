

/*This was a method that I tried out, but could not get to work
have left it here incase it may be useful for feedback*/


for (let i=0; i<7;i++){
    let drum = document.getElementsByClassName('drum')[i].addEventListener("click", function drum(){
        var text = this.innerHTML();
        playsound(text);
    });
};

document.addEventListener('keydown', (e) =>{
    playsound(event.key);
});

function playsound() {
    switch (text) {
        case 'a':
            let audio1 = new Audio ("sounds/boom.wav");
            audio1.play()
            break;
            case 's':
                let audio2 = new Audio ("sounds/clap.wav");
                audio2.play()
                break;
                case 'd':
                    let audio3 = new Audio ("sounds/hihat.wav");
                    audio3.play()
                    break;
                    case 'f':
                        let audio4 = new Audio ("sounds/kick.wav");
                        audio4.play()
                        break;
                        case 'g':
                            let audio5 = new Audio ("sounds/openhat.wav");
                            audio5.play()
                            break;
                            case 'h':
                                let audio6 = new Audio ("sounds/ride.wav");
                                audio6.play()
                                break;
                                case 'j':
                                    let audio7 = new Audio ("sounds/snare.wav");
                                    audio7.play()
                                    break;
                                    case 'k':
                                        let audio8 = new Audio ("sounds/tink.wav");
                                        audio8.play()
                                        break;
                                        case 'l':
                                            let audio9 = new Audio ("sounds/tom.wav");
                                            audio9.play()
                                            break;
            default:
                alert('!This key is invalid!')
    }
}



