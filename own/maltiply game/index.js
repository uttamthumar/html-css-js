

const num1 = Math.ceil(Math.random() * 10 );
const num2 = Math.ceil(Math.random() * 10 ); 

const questionEl = document.getElementById("question"); 
const inputEl = document.getElementById("answerInput")
const formEl = document.getElementById("form")
let scoreEl = document.getElementById("score")

 let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}
scoreEl.innerText = `score: ${score}`

questionEl.innerText = `Q. What is ${num1} multiply by ${num2}?`

const correntAns = num1 * num2

formEl.addEventListener("submit",()=>{
   const userans = +inputEl.value;
   if( userans === correntAns){   
       score++;
      updateLocalStroge()
   }else{
       score--;
     updateLocalStroge()
   }
})


function updateLocalStroge(){
       localStorage.setItem("score", JSON.stringify(score))
}
