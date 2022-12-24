const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
// przypisanie każdemu inputowi obsługi zdarzenia
// focus i blur
for (let input of inputs){
    input.addEventListener("focus",function(){
        this.nextElementSibling.innerHTML = this.dataset.opis;
    });
    input.addEventListener("blur",function(){
        this.nextElementSibling.innerHTML = "";
    });
}