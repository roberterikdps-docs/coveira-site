const grave = document.getElementById("graveContainer");
const scene = document.getElementById("scene");
const coffin = document.getElementById("coffinContainer");
const lid = document.getElementById("coffinLid");
const letter = document.getElementById("letter");

let opened=false;

const message = `Estou enviando essa carta, direto dos monges de ratanaba...

Os deuses Tupi, me falaram em sonhos, grandes revelaçoes BOMBASTICAS...

Dito isso, gostaria de marcar encontro com voce...`;

grave.onclick = ()=>{

if(opened)return;
opened=true;

scene.classList.add("zoom");

setTimeout(()=>{
coffin.classList.add("show");
},2000);

setTimeout(()=>{
lid.classList.add("open");
typeLetter();
},4000);

};

function typeLetter(){

let i=0;

function typing(){

if(i<message.length){

letter.innerHTML+=message[i];
i++;
setTimeout(typing,20);

}

}

typing();

}
