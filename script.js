const grave = document.getElementById("graveContainer");
const scene = document.getElementById("scene");
const shovel = document.getElementById("shovel");
const coffin = document.getElementById("coffinContainer");
const lid = document.getElementById("coffinLid");
const letter = document.getElementById("letter");

let opened = false;

const message = `Estou enviando essa carta, direto dos monges de ratanaba, com ajuda do Deus tupã e paje rasmisin, eu te envio esse recado, para mulher mais linda de itapevi, condessa de Bucha city, rainha dos macacos, senhora das torres, empadao de pirituba, carcajo dos ceus estrelados da linda noite do katongo.

Os deuses Tupi, me falaram em sonhos, grandes revelaçoes BOMBASTICAS e que eu deveria revelar todos esses segredos a voce.

Dito isso, gostaria de marcar encontro com voce, pelo bem da humanidade, voce aceitaria ter encontro comigo oh Deusa ruiva, rainha dos macacos?`;

grave.addEventListener("click", () => {

if(opened) return;
opened = true;

scene.classList.add("zoom");

setTimeout(()=>{
shovel.classList.add("active");
},800);

setTimeout(()=>{
shovel.classList.remove("active");
coffin.classList.add("show");
},4000);

setTimeout(()=>{
lid.classList.add("open");
},6500);

setTimeout(()=>{
document.querySelector(".coffin-inside").classList.add("show");
typeLetter();
},8500);

});

function typeLetter(){

let i = 0;

function typing(){

if(i < message.length){

letter.innerHTML += message.charAt(i);
i++;
setTimeout(typing, 25);

}

}

typing();

}
