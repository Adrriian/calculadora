// vairaveis
let result = document.querySelector(".result");
let numbers = document.querySelectorAll(".key");
let signal = document.querySelectorAll(".signal")
let reset = document.querySelectorAll(".reset")
let calcNumberOne = ""
let calcNumberTwo = ""
let chosseSignal = ""
let calcResult = ""

// funções de calculos

// função de numero 1
numbers.forEach(item => {
    item.addEventListener("click", () =>{
        if(calcNumberOne === "" && item.innerHTML === "."){
            result.innerHTML = "Digite o Primeiro numero"
        }else if(calcNumberTwo === "" && chosseSignal != "" &&  item.innerHTML === "."){
            result.innerHTML = "Digite o segundo numero"
        }else if(chosseSignal == "" && calcNumberTwo === ""){
            calcNumberOne += item.innerHTML
            result.innerHTML = calcNumberOne
        }else if (chosseSignal != ""){
            calcNumberTwo += item.innerHTML
            result.innerHTML = calcNumberOne + chosseSignal + calcNumberTwo
            
        }
      
    })
});
//função de sinais
signal.forEach(item =>{
    item.addEventListener("click", () =>{
        if(calcNumberOne != ""){
            chosseSignal = item.innerHTML
            result.innerHTML = calcNumberOne + chosseSignal + calcNumberTwo
        }else{
            result.innerHTML = "Digite o Primeiro numero"
        }
    })
})
// função igual ou reset

reset.forEach(item =>{
    item.addEventListener("click", ()=>{
        if(item.innerHTML === "C"){
            result.innerHTML = "0"
            calcNumberOne = ""
            calcNumberTwo = ""
            chosseSignal = ""
        }else{
            switch(chosseSignal){
                case "x":
                    calcResult = Number(calcNumberOne) * Number(calcNumberTwo)
                    result.innerHTML = calcResult
                    calcNumberOne = calcResult
                    calcNumberTwo = ""
                    chosseSignal = ""
                break;
                case "/":
                     calcResult = Number(calcNumberOne) / Number(calcNumberTwo)
                    result.innerHTML = calcResult
                    calcNumberOne = calcResult
                    calcNumberTwo = ""
                    chosseSignal = ""
                break;
                case "+":
                     calcResult = Number(calcNumberOne) + Number(calcNumberTwo)
                    result.innerHTML = calcResult
                    calcNumberOne = calcResult
                    calcNumberTwo = ""
                    chosseSignal = ""
                break;
                case "-":
                     calcResult = Number(calcNumberOne) - Number(calcNumberTwo)
                      result.innerHTML = calcResult
                      calcNumberOne = calcResult
                    calcNumberTwo = ""
                    chosseSignal = ""
                break;
            }
        }
    })
})
