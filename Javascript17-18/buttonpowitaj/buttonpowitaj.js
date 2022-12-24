const button=document.querySelector("#przycisk");
        

button.addEventListener("click", wstawianietekstu);
function wstawianietekstu(){
    document.getElementById("zawartosc").innerHTML = "Witaj świecie!";
    button.remove()
}