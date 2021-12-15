
for(i=0;i<7;i++){
document.querySelectorAll(".drums")[i].addEventListener("click",function() {
   var key = this.innerHTML;
    makesound(key);
    animation(key);
});
}
 
    document.addEventListener("keypress",function(event) {
        makesound(event.key);
        animation(event.key);
    });

function makesound(key)
{
    switch (key) {
        case 'w':
            let tom1 = new Audio("sounds_tom-1.mp3")
            tom1.play();
            break;
    
        case 's':
            let tom2 = new Audio("sounds_tom-2.mp3")
            tom2.play();
            break;
    
        case 'd':
            let tom3 = new Audio("sounds_tom-3.mp3")
            tom3.play();
            break;
    
        case 'l':
            let tom4 = new Audio("sounds_tom-4.mp3")
            tom4.play();
            break;
            
        case 'k':
            let crash = new Audio("sounds_crash.mp3")
            crash.play();
            break;
    
        case 'm':
            let snare = new Audio("sounds_snare.mp3")
            snare.play();
            break;
    
         case 'j':
            let kickbass = new Audio("sounds_kick-bass.mp3")
            kickbass.play();
            break;
        default:
            break;
    }
}
function animation(currentkey)
{
    document.querySelector('.' + currentkey).classList.add("pressed");
    setTimeout(function ()
    {
    document.querySelector('.' + currentkey).classList.remove("pressed");
    },100);
}
