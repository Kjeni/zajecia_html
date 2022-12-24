const spisOfert=document.querySelector('#spisofert');

const polemarka=document.querySelector('#marka');
const polemodel=document.querySelector('#model');
const polecena=document.querySelector('#cena');
const polespalanie=document.querySelector('#spalanie');

const zmien=document.querySelector('#zmien');
const dodajpolerocznik=document.querySelector('#dodaj');

let pb95=4;

function Oferta (marka, model, cena, spalanie) {
    this.marka = marka;
    this.model = model;
    this.cena = cena;
    this.spalanie = spalanie;
    this.koszt100km = function() {
        let koszt = this.spalanie * pb95;
        return koszt;
    };

}

const Komis = {
    Oferta1: new Oferta("Kia","Keke",60000,8),
    Oferta2: new Oferta("Fiat","Tico",61000,7),
    Oferta3: new Oferta("Ford","Mustang",100000,7)
}    

dodajOferte("Suzuki","Vitara",80500,9);
dodajOferte("Skoda","Octavia",51500,10);
dodajOferte("Honda","Civic",41500,7);


function wypiszWszystkieOferty(){
    let listaOfert='';
    for(idOferty of Object.keys(Komis))
    {
        listaOfert+=wypiszOferte(idOferty);
    }
    return listaOfert;
}

function wypiszOferte(idOferty)
{
    let opisOferty='<div class="oferta">';
    opisOferty+='<span class="marka">'+Komis[idOferty].marka+'</span>';
    opisOferty+='<span class="model">'+Komis[idOferty].model+'</span>';
    opisOferty+='<span class="cena"> Cena: '+Komis[idOferty].cena+' zł</span>';
    opisOferty+='<span class="koszt">Koszt 100 km to: '+Komis[idOferty].koszt100km()+' zł </span>';
    opisOferty+='<span data-idoferty="'+idOferty+'" class="usun">Usuń</span>';
    opisOferty+='<span data-idoferty="'+idOferty+'" class="edycja">Edycja</span>';
    opisOferty+='</div>';
    return opisOferty;
}

function dodajOferte(marka, model, cena, spalanie) 
{
    let iloscOfert=Object.keys(Komis).length;
    let ostatniIndex=(Object.keys(Komis)[iloscOfert-1]);
    let ostatniNumer=Number(ostatniIndex.substr(6));
    let kluczNowy='oferta'+(ostatniNumer+1);
    Komis[kluczNowy] = new Oferta(marka, model, cena, spalanie) 
}

function usunOferte(idOferty) 
{
    delete Komis[idOferty];
}

function zmienOferte(idOferty, marka, model, cena, spalanie) 
{
    Komis[idOferty].marka = marka;
    Komis[idOferty].model = model;
    Komis[idOferty].cena = cena;
    Komis[idOferty].spalanie = spalanie;
}

spisOfert.innerHTML=wypiszWszystkieOferty();


function dodajUsuwanie() {

    const linkiUsun=document.querySelectorAll('.usun');
    for(const linkUsun of linkiUsun)
    {
        linkUsun.addEventListener("click",function(){
            usunOferte(this.dataset.idoferty);
            spisOfert.innerHTML=wypiszWszystkieOferty();
            

            dodajUsuwanie(); 
            dodajEdycje();
        })
    }
}

dodajUsuwanie();

function dodajEdycje() {

    const linkiEdycja=document.querySelectorAll('.edycja');
    for(const linkEdycja of linkiEdycja)
    {
        linkEdycja.addEventListener("click",function(){
            przepiszDane(this.dataset.idoferty);
            zmien.setAttribute("data-idoferty",this.dataset.idoferty);
        })
    }
}

function przepiszDane(idOferty){
    polemarka.value=Komis[idOferty].marka;
    polemodel.value=Komis[idOferty].model;
    polecena.value=Komis[idOferty].cena;
    polespalanie.value=Komis[idOferty].spalanie;
}

zmien.addEventListener("click",function(){
    zmienOferte(this.dataset.idoferty, polemarka.value, polemodel.value, polecena.value, polespalanie.value)
    
    wyczyscDaneFormularza;
    spisOfert.innerHTML=wypiszWszystkieOferty();

    dodajUsuwanie(); 
    dodajEdycje();
})

function wyczyscDaneFormularza(){
    polemarka.value='';
    polemodel.value='';
    polecena.value='';
    polespalanie.value='';
}

dodajEdycje();

function dodajDodawanie(){
    dodaj.addEventListener("click",function(){
        dodajOferte(polemarka.value, polemodel.value, polecena.value, polespalanie.value)
        wyczyscDaneFormularza();

        spisOfert.innerHTML=wypiszWszystkieOferty();

        dodajEdycje();
        dodajUsuwanie(); 
    })
}

dodajDodawanie();

