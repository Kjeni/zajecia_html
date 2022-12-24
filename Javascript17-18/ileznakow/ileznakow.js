const tekst = document.querySelector("#tekst");
const licznik = document.querySelector("#licznik");

tekst.addEventListener("keydown", ileznakow);

function ileznakow() {
    licznik.innerHTML = 'wpisałeś: ' + tekst.value.length + ' zostało Ci: ' + (200-tekst.value.length) + ' znaków.';
};