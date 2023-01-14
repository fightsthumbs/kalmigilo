console.log("Hello world")


const textBoxCont = document.getElementById("casillasCont");
console.log(textBoxCont);
const para = document.createElement("input");
para.setAttribute("type","number");
para.setAttribute("class","firstCasilla");

console.log(para);

// textBoxCont.appendChild(para);



const stepNumber = document.getElementById("step-number");
const isIncremental = document.getElementById("incremental");
console.log("the value of incremental is" + typeof isIncremental.value);
console.log(isIncremental.checked);
console.log(isIncremental);
console.log(typeof stepNumber.value)
const acceptButton = document.getElementById("accept");
acceptButton.addEventListener("click", (e) => {
  while (textBoxCont.hasChildNodes()) {
    textBoxCont.removeChild(textBoxCont.firstChild);
  }
  console.log("this works")
  console.log(stepNumber.value)
  console.log(isIncremental.value)
  
  let caseNum = 1;
  let multiplier= parseFloat(stepNumber.value);
  const MULT = parseFloat(stepNumber.value);

  console.log(typeof MULT + typeof multiplier);
  let number = 1000;
  for (; number > 0 ; ) {
    console.log(number)
    let casillaElem = document.createElement("input");
    casillaElem.setAttribute("type","number");
    casillaElem.setAttribute("class", "casilla_"+caseNum);
    casillaElem.setAttribute("rightanswer",number);
    caseNum+=1;

    casillaElem.addEventListener("keypress", (e) => {
      if(e.key === "Enter" || e.keyCode === 32) {
        // console.log(e.target.nextElementSibling
        console.log("presionó eneter");
        e.target.nextElementSibling.focus();
      }

      
    })

    casillaElem.addEventListener("change",(x)=>{

        let userInput = x.target.value;
        let rightAnswer = x.target.attributes.rightanswer.value;
        if(userInput == rightAnswer) {
          x.target.setAttribute("class","right-green");
        } else {
          console.log("respuesta incorrecta")
        }

      console.log("Helloman");
    })


    textBoxCont.appendChild(casillaElem);

    if (isIncremental.checked === true) {
      console.log(multiplier);
      number -= multiplier;
      multiplier += MULT;
    } else {
      number -= multiplier;
    }

  }
  textBoxCont.firstChild.setAttribute("value",1000);
  textBoxCont.firstChild.classList.add("right-green");

/*   textBoxCont.children.forEach(element, element => {
    element.addEventListener("change", () => {
      console.log("cambio en un elemento");
    })
  });
   */

})







const listNumbers = [];

let multiplier = 0;
for (let number = 1000; number > 0; number = number-multiplier) {
console.log(number);
listNumbers.push(number);
multiplier+=7;
};




console.log(listNumbers);

