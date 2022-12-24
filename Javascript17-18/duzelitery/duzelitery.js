const informacja=document.querySelector('#informacja');
const dane=document.querySelector('#dane');

let tekst='JavaScript (w skrócie JS) – język został opracowany przez firmę Netscape w połowie lat 90. Jego twórcę jest Brendan Eich.';
        
informacja.innerHTML=tekst;
dane.innerHTML=tekst.toLocaleUpperCase();