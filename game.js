var arrayColor = ["blue", "green", "red", "yellow"];
var randInt;
var arrayGuess = [];
var arrayAnswer = [];
var wrong = new Audio("sounds/wrong.mp3");

const compareArrays = (a, b) =>
    a.length === b.length && a.every((element, index) => element === b[index]);

$(document).one("keypress", function () {
    addArray();
    startGame();
})

function startGame() {
    $(".btn").click(function (event) {
        playAnimation(event.target.id);
        makeSound(event.target.id);
        arrayGuess.push(event.target.id);
        console.log(arrayGuess)
        console.log(arrayAnswer)
        if (arrayAnswer.toString().slice(0, arrayGuess.toString().length) !== arrayGuess.toString()) {
            wrong.play();
            $("body").addClass("game-over");
            $("h1").text("Game Over, Press Any Key to Restart");

            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 500);

            arrayAnswer = [];
            $(".btn").off('click');
            $(document).one("keypress", function () {
                addArray();
                startGame();
            })
        }

        if (arrayAnswer.length === arrayGuess.length) {
            if (compareArrays(arrayAnswer, arrayGuess)) {
                setTimeout(function () {
                    addArray();
                }, 750)

            }
            else {
                wrong.play();
                $("body").addClass("game-over");
                $("h1").text("Game Over, Press Any Key to Restart");

                setTimeout(function () {
                    $("body").removeClass("game-over");
                }, 500);

                arrayAnswer = [];
                $(".btn").off('click');
                $(document).one("keypress", function () {
                    addArray();
                    startGame();
                })
            }
        }
    })
}

function addArray() {
    arrayGuess = [];
    randInt = Math.floor(Math.random() * 4);
    randColor = arrayColor[randInt];
    arrayAnswer.push(randColor);
    $("h1").text("Level " + arrayAnswer.length);
    playAnimation(randColor);
    makeSound(randColor);
}


function makeSound(key) {
    switch (key) {
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;

        default: console.log(key);
    }
}

function playAnimation(key) {

    switch (key) {
        case "blue":
            $("#blue")[0].classList.add("pressed");

            setTimeout(function () {
                $("#blue")[0].classList.remove("pressed");
            }, 500);
            break;
        case "green":
            $("#green")[0].classList.add("pressed");

            setTimeout(function () {
                $("#green")[0].classList.remove("pressed");
            }, 500);
            break;
        case "red":
            $("#red")[0].classList.add("pressed");

            setTimeout(function () {
                $("#red")[0].classList.remove("pressed");
            }, 500);
            break;
        case "yellow":
            $("#yellow")[0].classList.add("pressed");

            setTimeout(function () {
                $("#yellow")[0].classList.remove("pressed");
            }, 500);
            break;

        default: console.log(key);
    }
}