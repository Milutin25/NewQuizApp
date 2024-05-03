document.getElementById("button").addEventListener("click", function(){
    let result = 0;
    const selectAnswerOne = document.querySelector('input[name="q1"]:checked');
    const selectAnswerTwo = document.querySelector('input[name="q2"]:checked');
    const selectAnswerThree = document.querySelector('input[name="q3"]:checked');
    
    if (selectAnswerOne && selectAnswerTwo && selectAnswerThree) {
        if(selectAnswerOne.value === "Nikola Jokic") {result ++}
        if(selectAnswerTwo.value === "Novak Djokovic") {result ++}
        if (selectAnswerThree.value === "Red Star") {result ++}
    }
  console.log(result); 
  
  const displyaResult = document.getElementById("result");
  displyaResult.textContent = `Your result is ${result} out of 3!`;
});