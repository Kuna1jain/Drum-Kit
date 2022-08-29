var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonClick = this.innerHTML;
        makesound(buttonClick);
        animation(buttonClick);
    });
}
    document.addEventListener("keypress",function(event)
    { var a=event.key;
        makesound(a);
        animation(a);
    });
    
    function makesound(key){
        switch (key) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;

            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            case "j":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case "k":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;

            case "l":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
        }
    }
    function animation(curr){
        var active = document.querySelector("." + curr);
        active.classList.add("pressed");
        setTimeout(function(){ active.classList.remove("pressed");} ,100);
    }
