const zawartosc=document.querySelector("#zawartosc");
        
let text='<table>';
for(let i=0;i<10;i++) //i++ to i=i+1 ustawia skok for o 1
{
    text+='<tr><td>'+i+'</td><td>'+(i*i)+'</td></tr>';
}
text+='</table>';
        
zawartosc.innerHTML=text;