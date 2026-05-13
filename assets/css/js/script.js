let myFirstString = "ciao,mondo";

myFirstString = "hello,world";

console.log(myFirstString);



let punteggio;
punteggio = 5;

console.log(punteggio);


const mesi=document.getElementById('mesi');
console.log(mesi);


const userName = document.getElementById('userName');
const sendName = document.getElementById('sendName');
const regard = document.getElementById('regard');
let name;

sendName.addEventListener("click", function(){
name = userName.value;
  regard.innerText = `Ciao ${name}`;
})


let eta = 20;



if (eta >= 18) {
    console.log("Pui entrare");
}



let et = 15;
if (eta >= 18) {
    console.log("Puoi entrare");
}




let eta = 15;

if (eta >= 18) {
    console.log("Maggiorenne");
} else {
    console.log("Minorenne");
}


for (let i = 0; i < 3; i++) {
    console.log("Ciao");
}


function saluta(nome) {
    console.log("Ciao " + nome);
}

saluta(luca)


let frutti = ["mela", "banana", "pera"];
console.log(frutti[0]);
console.log(frutti[1]);
console.log(frutti[2]);


document.getElementById("btn").addEventListener("click", function() {
    console.log("Hai cliccato");
});