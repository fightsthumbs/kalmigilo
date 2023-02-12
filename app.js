//get the elements

const textBoxCont = document.getElementById("casillasCont"); //get the place where the boxes will be created

const stepNumber = document.getElementById("step-number"); //get the value of the steps
const isIncremental = document.getElementById("incremental"); // gets the value of whether the exercise will be incremental or not

const acceptButton = document.getElementById("accept"); // gets the submit button




//once the user clicks on the button
acceptButton.addEventListener("click", (e) => {
  while (textBoxCont.hasChildNodes()) {
    textBoxCont.removeChild(textBoxCont.firstChild);
  }

  
  let caseNum = 1;
  let multiplier= parseFloat(stepNumber.value);
  const MULT = parseFloat(stepNumber.value);

  let number = 1000;
  for (; number > 0 ; ) {
    
    let casillaElem = document.createElement("input");
    casillaElem.setAttribute("type","number");
    casillaElem.setAttribute("class", "casilla_"+caseNum);
    casillaElem.setAttribute("rightanswer",number);
    caseNum+=1;

    casillaElem.addEventListener("keypress", (e) => {
      if(e.key === "Enter" || e.keyCode === 32) {
        e.target.nextElementSibling.focus();
      }

      
    })

    casillaElem.addEventListener("change",(x)=>{

        let userInput = x.target.value;
        let rightAnswer = x.target.attributes.rightanswer.value;
        if(userInput == rightAnswer) {
          x.target.setAttribute("class","right-green");
          x.target.nextElementSibling.focus();
        } else {
          console.log("respuesta incorrecta")
        }

 
    })


    textBoxCont.appendChild(casillaElem);

    if (isIncremental.checked === true) {
     
      number -= multiplier;
      multiplier += MULT;
    } else {
      number -= multiplier;
    }

  }
  textBoxCont.firstChild.setAttribute("value",1000);
  textBoxCont.firstChild.classList.add("right-green");



})







const listNumbers = [];

let multiplier = 0;
for (let number = 1000; number > 0; number = number-multiplier) {

listNumbers.push(number);
multiplier+=7;
};



