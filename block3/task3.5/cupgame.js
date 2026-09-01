let cups = [
    false,
    true,
    false
];

let incorrect = 0;

let gamestarted = false;


function becherKlick(becher, nummer) {

    if (becher.classList.contains("open")) {

        becher.src = "cup.png";

        becher.classList.remove("open");

    } else {

        becher.classList.add("open");


        if (cups[nummer] === true) {

            becher.src = "cup-open-ball.png";

        }

        else {

            becher.src = "cup-open.png";

            if (gamestarted === true) {

                incorrect++;

                document.getElementById("incorrect").innerText = incorrect;

            }

        }

    }

}


function shuffleCups() {

    cups.sort(() => 0.5 - Math.random());

    let becher = document.querySelectorAll(".cup");

    becher.forEach(function (cup) {

        cup.src = "cup.png";

        cup.classList.remove("open");

    });

    gamestarted = true;

}
