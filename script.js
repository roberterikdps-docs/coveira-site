const grave = document.getElementById("grave");
const scene = document.getElementById("scene");
const coffin = document.getElementById("coffinContainer");
const lid = document.getElementById("lid");
const letter = document.getElementById("letter");

let opened = false;

const text = `Estou enviando essa carta, direto dos monges de ratanaba, com ajuda do Deus tupã e paje rasmisin...

Os deuses Tupi me falaram em sonhos grandes revelaçoes...

Gostaria de marcar encontro com voce, oh Deusa ruiva.`;

grave.onclick = function(){

if(opened) return;

opened = true;

scene.classList.add("zoom");

setTimeout(()=>{

coffin.classList.add("show");

},1500);

setTimeout(()=>{

lid.classList.add("open");
typeText();

},3500);

};

function typeText(){

let i=0;

function typing(){

if(i < text.length){

letter.innerHTML += text[i];
i++;

setTimeout(typing,20);

}

}

typing();

}
