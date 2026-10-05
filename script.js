/* =====================================================
   GET ELEMENT
===================================================== */

const opening =
    document.getElementById("opening");

const main =
    document.getElementById("main");

const letter =
    document.getElementById("letter");

const finalScreen =
    document.getElementById("final");


const startBtn =
    document.getElementById("startBtn");

const letterBtn =
    document.getElementById("letterBtn");

const surpriseBtn =
    document.getElementById("surpriseBtn");

const replayBtn =
    document.getElementById("replayBtn");


const music =
    document.getElementById("music");


const stars =
    document.getElementById("stars");

const hearts =
    document.getElementById("hearts");

const sakura =
    document.getElementById("sakura");

const confetti =
    document.getElementById("confetti");


const bearGuide =
    document.getElementById("bearGuide");

const bearSpeech =
    document.getElementById("bearSpeech");



/* =====================================================
   SHOW SCREEN
===================================================== */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(item => {

            item.classList.remove("active");

        });


    screen.classList.add("active");

}



/* =====================================================
   CREATE STARS
===================================================== */

function createStars(amount = 150) {

    stars.innerHTML = "";


    for (let i = 0; i < amount; i++) {

        const star =
            document.createElement("div");


        star.className =
            "star";


        star.style.left =
            Math.random() * 100 + "%";


        star.style.top =
            Math.random() * 100 + "%";


        const size =
            Math.random() * 3 + 1;


        star.style.width =
            size + "px";


        star.style.height =
            size + "px";


        star.style.animationDelay =
            Math.random() * 3 + "s";


        stars.appendChild(star);

    }

}



/* =====================================================
   CREATE HEARTS
===================================================== */

function createHearts(amount = 20) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        heart.innerHTML =
            Math.random() > .5
                ? "❤️"
                : "💗";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            Math.random() * 15 + 12 + "px";


        heart.style.animationDuration =
            Math.random() * 5 + 5 + "s";


        heart.style.animationDelay =
            Math.random() * 3 + "s";


        hearts.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 11000);

    }

}



/* =====================================================
   CREATE SAKURA
===================================================== */

function createSakura(amount = 25) {

    for (let i = 0; i < amount; i++) {

        const flower =
            document.createElement("div");


        flower.className =
            "sakura-piece";


        flower.innerHTML =
            "🌸";


        flower.style.left =
            Math.random() * 100 + "%";


        flower.style.fontSize =
            Math.random() * 12 + 12 + "px";


        flower.style.animationDuration =
            Math.random() * 6 + 6 + "s";


        flower.style.animationDelay =
            Math.random() * 4 + "s";


        sakura.appendChild(flower);


        setTimeout(() => {

            flower.remove();

        }, 13000);

    }

}



/* =====================================================
   CREATE CONFETTI
===================================================== */

function createConfetti(amount = 80) {

    const shapes = [
        "💖",
        "✨",
        "💕",
        "⭐",
        "🌸"
    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti-piece";


        piece.innerHTML =
            shapes[
                Math.floor(
                    Math.random() *
                    shapes.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.fontSize =
            Math.random() * 10 + 10 + "px";


        piece.style.animationDuration =
            Math.random() * 4 + 3 + "s";


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        confetti.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 9000);

    }

}



/* =====================================================
   TEDDY TALK
===================================================== */

function bearTalk(text) {

    if (!bearSpeech) return;

    bearSpeech.innerHTML =
        text;

}



/* =====================================================
   TEDDY HAPPY
===================================================== */

function bearHappy() {

    if (!bearGuide) return;


    bearGuide.style.transform =
        "translateY(-15px) scale(1.05)";


    setTimeout(() => {

        bearGuide.style.transform =
            "translateY(0) scale(1)";

    }, 700);

}



/* =====================================================
   INITIAL EFFECT
===================================================== */

createStars();


setTimeout(() => {

    bearTalk(
        "Haiii 👋<br>Aku beruang kecil yang akan menemanimu ❤️"
    );

}, 1200);



/* =====================================================
   START BUTTON
===================================================== */

startBtn.addEventListener(
    "click",
    () => {

        /* MUSIC */

        music.volume = 0.45;


        music
            .play()
            .catch(() => {

                console.log(
                    "Music membutuhkan interaksi pengguna."
                );

            });


        /* TEDDY */

        bearHappy();


        bearTalk(
            "Yeayyy! 🎉<br>Kita mulai surprise-nya!"
        );


        /* SCREEN */

        showScreen(main);


        /* EFFECT */

        createHearts(30);

        createSakura(35);


        /* TEDDY MESSAGE */

        setTimeout(() => {

            bearTalk(
                "Lihat foto-fotonya... 👀❤️<br>Mereka sedang menemani Wulan!"
            );

        }, 1800);


        setTimeout(() => {

            bearTalk(
                "Cantik yaaa? ✨<br>Tapi masih ada sesuatu..."
            );

        }, 5000);


        setTimeout(() => {

            bearTalk(
                "Coba buka suratnya 💌"
            );

        }, 8000);

    }
);



/* =====================================================
   LETTER BUTTON
===================================================== */

letterBtn.addEventListener(
    "click",
    () => {

        showScreen(letter);


        createHearts(20);

        createSakura(30);


        bearHappy();


        bearTalk(
            "Akhirnya suratnya dibuka! 💌"
        );


        setTimeout(() => {

            const letterBear =
                document.getElementById(
                    "bearGuideLetter"
                );


            if (letterBear) {

                const speech =
                    letterBear.querySelector(
                        ".bear-speech"
                    );


                if (speech) {

                    speech.innerHTML =
                        "Bacanya pelan-pelan ya... 🥺❤️";

                }

            }

        }, 1500);

    }
);



/* =====================================================
   SURPRISE BUTTON
===================================================== */

surpriseBtn.addEventListener(
    "click",
    () => {

        bearHappy();


        bearTalk(
            "3... 2... 1... 🎉"
        );


        setTimeout(() => {

            bearTalk(
                "SURPRISE!!! ❤️❤️❤️"
            );

        }, 1200);


        setTimeout(() => {

            showScreen(finalScreen);


            createHearts(70);

            createSakura(60);

            createConfetti(100);

        }, 1800);


        setTimeout(() => {

            bearTalk(
                "Happy Birthday Wulan! 🎂❤️"
            );

        }, 3500);


        setTimeout(() => {

            bearTalk(
                "Semoga kamu selalu bahagia ✨"
            );

        }, 6500);

    }
);



/* =====================================================
   REPLAY
===================================================== */

replayBtn.addEventListener(
    "click",
    () => {

        hearts.innerHTML = "";

        sakura.innerHTML = "";

        confetti.innerHTML = "";


        music.pause();

        music.currentTime = 0;


        showScreen(opening);


        bearTalk(
            "Kita ulang dari awal ya! 😆❤️"
        );

    }
);



/* =====================================================
   CONTINUOUS HEARTS
===================================================== */

setInterval(() => {

    if (
        main.classList.contains("active")
    ) {

        createHearts(2);

    }

}, 2500);



/* =====================================================
   CONTINUOUS SAKURA
===================================================== */

setInterval(() => {

    if (
        main.classList.contains("active")
    ) {

        createSakura(2);

    }

}, 3000);



/* =====================================================
   EXTRA EFFECT WHEN FINAL SCREEN
===================================================== */

setInterval(() => {

    if (
        finalScreen.classList.contains("active")
    ) {

        createHearts(3);

    }

}, 1800);