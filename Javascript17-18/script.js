const prompt = require('prompt-sync')();

//pierwszy
var imie = "Kacper";
var nazwisko = "Blazejewski";
console.log(imie+" "+nazwisko);
//drugi
var imie2 = prompt("Wprowadź imie: ");
console.log("Witaj"+" "+imie2);
//trzeci
var witaj = prompt("przywitaj sie: ");
if (witaj=="Witaj")
{
    console.log("Witam");
}   else
{
    console.log(" ");
}
//czwarty
var number = prompt("Wprowadź liczbę: "); 
if (number=="7")
{
    console.log("Siódemka")
} else
{
    console.log("Dziękuje");
}
//piąty
var a=50;var b=4;var wynik1=a-3;var wynik2=b+9;
console.log(wynik1, wynik2);
//szósty
var koszyk = [];
koszyk.push("kiwi","orzechy");
console.log( koszyk);
//siódmy
var kolory = ["niebieski", "zielony", "czerwony", "czarny", "fioletowy"];
console.log(kolory[0]);
console.log(kolory[2]);
//ósmy
var number1=prompt("Wprowadź pierwsza liczbe: ");
var number2=prompt("Wprowadź druga liczbe: ");
function Suma(number1, number2){
    return +number1 + +number2;
}
var wynik = Suma(number1, number2);
console.log("Wynik działania to: "+wynik);