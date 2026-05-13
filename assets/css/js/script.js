let myFirstString = "ciao,mondo";

console.log(myFirstString);


const userName = document.getElementById('userName');
const sendName = document.getElementById('sendName');
const regard = document.getElementById('regard');
let name;

sendName.addEventListener("click", function(){
name = userName.value;
  regard.innerText = `Ciao ${name}`;
})