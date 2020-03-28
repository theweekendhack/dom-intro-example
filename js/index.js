
function calculateSum()
{
  let num1Box= document.querySelector("#firstNum");
  let num2Box = document.querySelector("#secondNum");

  let answerDiv = document.querySelector("#answer");

  let sum = parseInt(num1Box.value) + parseInt(num2Box.value);

  answerDiv.innerHTML=`The sum of ${num1Box.value} + ${num2Box.value} = ${sum}`;

  //syntax for manipulating CSS using the DOM
  //element.style.cssproperty=cssvalue

  answerDiv.style.color="#f00";
  answerDiv.style.fontSize="3rem";
  answerDiv.style.backgroundColor="#ff0";
  

    num1Box.style.display="none";
    num2Box.style.display="none";


}



//event handler 
function calculateDiff()
{
    let num1Box= document.querySelector("#firstNum");
    let num2Box = document.querySelector("#secondNum");
  
    let diff = parseInt(num1Box.value) - parseInt(num2Box.value)

    console.log(`The diff of ${num1Box.value} - ${num2Box.value} = ${diff}`);
    alert(`The diff of ${num1Box.value} - ${num2Box.value} = ${diff}`)
}

//Fetching element from dom
let addButton = document.querySelector("#calculateButton");// returns an invidual object from the DOM!
let substractButton = document.querySelector("#calculateDifference");

//making element an even listener 
addButton.addEventListener("click",calculateSum);
substractButton.addEventListener("click",calculateDiff);



