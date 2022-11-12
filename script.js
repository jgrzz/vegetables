const buttonTomato=document.querySelector("#tomatoBtn")
const buttonCucumber=document.querySelector("#cucumberBtn")
const buttonPaprika=document.querySelector("#paprikaBtn")

const inputTomato=document.querySelector("#tomatoInput")
const inputCucumber=document.querySelector("#cucumberInput")
const inputPaprika=document.querySelector("#paprikaInput")

const h3Tomato=document.querySelector("#tomatoCost")
const h3Cucumber=document.querySelector("#cucumberCost")
const h3Paprika=document.querySelector("#paprikaCost")

buttonTomato.addEventListener("click",function(){
  const userInput=inputTomato.value;
  h3Tomato.innerText="cost: "+(userInput*2.5)+ "€"     
  console.log(123)
}) 
buttonCucumber.addEventListener("click",function(){
  const userInput=inputCucumber.value;
  h3Cucumber.innerText="cost: "+(userInput*1.5)+ "€"     
  console.log(123)
}) 
buttonPaprika.addEventListener("click",function(){
  const userInput=inputPaprika.value;
  h3Paprika.innerText="cost: "+(userInput*2)+ "€" 
  console.log(123)
}) 