const liczba=document.querySelector('#liczba');
const suwak=document.querySelector('#suwak');

suwak.addEventListener("input", pobieraniewartosci);

function pobieraniewartosci(){
    liczba.innerHTML=suwak.value
}