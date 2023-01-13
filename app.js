console.log("Hello world")


const textBoxCont = document.getElementById("casillasCont");
console.log(textBoxCont);
const para = document.createElement("input");
para.setAttribute("type","number");
para.setAttribute("class","firstCasilla");

console.log(para);

textBoxCont.appendChild(para);



const stepNumber = document.getElementById("step-number");
const isIncremental = document.getElementById("incremental");
console.log(isIncremental);
const acceptButton = document.getElementById("accept");
acceptButton.addEventListener("click", (e) => {
  while (textBoxCont.hasChildNodes()) {
    textBoxCont.removeChild(textBoxCont.firstChild);
  }
  console.log("this works")
  console.log(stepNumber.value)
  console.log(isIncremental.value)
  
  for (let i = 1; i <= stepNumber.value; i++) {
    let elementitof = document.createElement("input");
    elementitof.setAttribute("type","number")
    elementitof.setAttribute("class", "casilla_"+i);
    textBoxCont.appendChild(elementitof);
  }
  textBoxCont.firstChild.setAttribute("value",1000);


})







const listNumbers = [];

let multiplier = 0;
for (let number = 1000; number > 0; number = number-multiplier) {
console.log(number);
listNumbers.push(number);
multiplier+=7;
};




console.log(listNumbers);

