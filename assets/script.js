let number = "";
let number2 = "";
let operador = "";
let marcador = 1;

let btn = document.querySelectorAll(".key");
let result = document.querySelector(".result")
let calculoresult = "";

btn.forEach(function (btns) {
    btns.addEventListener("click", function () {

        function colocandonumero(){
            if(operador === ""){
                number += btns.innerText
                console.log(`numero 1 é: ` + number)
            }else{
                number2 += btns.innerText
                console.log(`numero 2 é: ` + number2)
            }
        }


        switch (btns.innerText) {
            case "1":; case "2":; case "3":; case "4":; case "5":; case "6":; case"7":; case"8":; case "9":;
            case "0":
            colocandonumero()
                break;
            case "+": 
            operador = "+"
            calculoresult = Number(number) + Number(number2)
            break;

            case "-": 
            operador = "-"
            calculoresult = Number(number) - Number(number2)
            break;

            case "*": 
            operador = "*"
            calculoresult = Number(number) * Number(number2)
            break;

            case "/": 
            operador = "/"
            calculoresult = Number(number) / Number(number2)
            break;

            case "C":
                number = "";
                number2 = "";
                operador = "";
                marcador = 1;
                result.innerText = 0;
            break;

            case "=":
                result.innerText = calculoresult
            break;
        }

        

        update()
    })
})

function update() {
    if (number === "") {
        result.innerText = "=="
    } else {
        result.innerText = number + operador + number2
    }
}