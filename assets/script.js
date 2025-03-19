let number = "";
let number2 = "";
let operador = "";
let marcador = 1;
let calculoResult = "";

let btn = document.querySelectorAll(".key");
let result = document.querySelector(".result");


function update() {
    result.innerText = number + operador + number2
}

function exibirresult() {
    switch (operador) {
        case "+":
            calculoResult = Number(number) + Number(number2);
            break;

        case "-":
            calculoResult = Number(number) - Number(number2);
            break;

        case "x":
            calculoResult = Number(number) * Number(number2);
            break;

        case "/":
            calculoResult = Number(number) / Number(number2);
            break;

    }
    result.innerText = calculoResult


}
function sinal() {
    if (number === "") {
        number = "";
        number2 = "";
        operador = "";
        alert("digite o primeiro número")
    } else if (result.innerText == calculoResult) {
        number = calculoResult
        number2 = "";
        marcador = 1
        operador = ""
    }
}

btn.forEach(function(btns) {
    btns.addEventListener("click", function() {
        function colocandonumero() {
            if (operador === "") {

                number += btns.innerText
                console.log(`numero 1 é: ` + number)
            } else {
                number2 += btns.innerText
                console.log(`numero 2 é: ` + number2)
            }
        }
        switch (btns.innerText) {
            case "1": ; case "2": ; case "3": ; case "4": ; case "5": ; case "6": ; case "7": ; case "8": ; case "9": ;
            case "0":
                colocandonumero()
                update();
                break;

            case "C":
                number = "";
                number2 = "";
                operador = "";
                marcador = 1;
                result.innerText = "0";
                break;
            case "+":
                sinal()
                if (number === "") {
                    operador = ""
                }else{
                    operador= "+"
                    marcador = 2
                }
                console.log(operador)
                update();
                break;

            case "-":
                sinal()
                if (number === "") {
                    operador = ""
                }else{
                    operador= "-"
                    marcador = 2
                }
                console.log(operador)
                update();
                break;

            case "x":
                sinal()
                if (number === "") {
                    operador = ""
                }else{
                    operador= "x"
                    marcador = 2
                }
                console.log(operador)
                update();
                break;

            case "/":
                sinal()
                if (number === "") {
                    operador = ""
                }else{
                    operador= "/"
                    marcador = 2
                }
                console.log(operador)
                update();
                break;

            case ".":
                sinal()
                if (number !== "" && marcador === 1 && number2 === "") {
                    number += '.';
                    marcador = 2
                }else if (number !== "" && marcador === 2 && number2 === ""){                    alert("digite o segundo números")
                }else if(number !== "" && marcador === 2 && number2 !== ""){
                    number2 += '.';
                    marcador = 2
                }
                update();
                break;

            case "=":
                if (number === "" || operador === "" || number2 === "") {
                    alert("Faça a equação")
                }else{
                     exibirresult()
                }
                console.log(calculoResult)
                break;
        }
    })
})