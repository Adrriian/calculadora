let number = "";
let number2 = "";
let operador = "";
let marcador = "";

let btn = document.querySelector(".key");
let result = document.querySelector(".result")

btn.forEach(function(btns){
    btns.addEventListener("click", function(){
        switch(btns){
            case "1":
            result.innerText = 1;
            break;
        }
    })
})
