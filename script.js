const grave = document.getElementById("grave");
const scene = document.getElementById("scene");
const coffin = document.getElementById("coffinContainer");
const lid = document.getElementById("lid");
const letter = document.getElementById("letter");

let opened = false;

const message = `Ola deusa bucha,

yanomami de ratanaba e a condessa mais linda de itapevi.

Venho aqui, humildemente pedir a bela dama dos macaco, para que venha me conceder o prazer de ter um benevolente encontro com vossa majestade.

Voce aceitaria um convite de um mero Bucha?`;


grave.onclick = () => {

if(opened) return;

opened = true;

/* zoom suave */
scene.classList.add("zoom");

/* aparece caixão */
setTimeout(() => {

coffin.classList.add("show");

},1500);

/* abre tampa */
setTimeout(() => {

lid.classList.add("open");

/* adiciona classe de detalhe visual */
lid.style.boxShadow = "0 0 40px rgba(0,0,0,0.9)";
coffin.style.filter = "drop-shadow(0 0 25px black)";

typeWriter();

},3200);

};


/* efeito de escrita */

function typeWriter(){

letter.innerHTML = "";

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
