let number = "";
let number2 = "";
let operador = "";
let marcador = 1;

let btn = document.querySelectorAll(".key");
let result = document.querySelector(".result")

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
            case "1":;
            case "2":
            colocandonumero()
                break; 
            case "+": 
            operador = "+"
            console.log(`sinal é: ` + operador)
            break;
            case "-": 
            operador = ""
            operador = "-"
            console.log(`sinal é: ` + operador)
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