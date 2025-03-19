let number = "";
let number2 = "";
let operador = "";
let marcador = 1;

let btn = document.querySelectorAll(".key");
let result = document.querySelector(".result")

btn.forEach(function (btns) {
    btns.addEventListener("click", function () {

        switch (btns.innerText) {
            case "1":
                if(number === ""){
                    number = btns.innerText
                    console.log(`numero 1 é: ` + number)
                }else{
                    number = btns.innerText
                    console.log(`numero 2 é: ` + number)
                }
                break; ss
        }

        update()
    })
})

function update() {
    if (number === "") {
        result.innerText = "2"
    } else {
        result.innerText = number + operador + number2
    }
}