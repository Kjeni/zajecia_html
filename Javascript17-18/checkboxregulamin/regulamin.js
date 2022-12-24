const checkbox=document.querySelector("#checkbox"); 

checkbox.addEventListener("change", wstawianietekstu);
function wstawianietekstu(){
    if (this.checked) {
        document.getElementById("zawartosc").innerHTML = "Witaj świecie!";
      } else {
        document.getElementById("zawartosc").innerHTML = "";
    }
    };
