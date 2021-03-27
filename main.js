// tady je místo pro náš program
function hazej() {
    let kostka = document.querySelector("#kostka");
    let audio = document.querySelector("#audio");
    let text = document.querySelector("#zprava");

    let vysledek = Math.floor(Math.random() * 6) + 1;
    if (vysledek >= 1 && vysledek < 6) {
        kostka.src = 'obrazky/' + vysledek + '.png';
    }

    else if (vysledek === 6) {
        kostka.src = 'obrazky/6.png';
        audio.play();
        zprava.textContent = 'Gratuluji, jsi vítěz!';
    }
   console.log(vysledek);
}