// odliczanie do:
var countDownDate = new Date("Jan 1, 2023 00:00:01").getTime();

// zmianaczasu o 1s:
var x = setInterval(function() {

  //data_teraz
  var now = new Date().getTime();

  //dlugosc
  var distance = countDownDate - now;

  //dnigodzinyminutysekundy
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //w elemencie o id=zegar
  document.getElementById("zegar").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  //tekst gdy czas upłynął
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("zegar").innerHTML = "Too late :)";
  }
}, 1000);