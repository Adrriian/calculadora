let number = "";
let number2 = "";
let operador = "";
let marcador = "";

let btn = documentQuerySelector(".key");
let result = document.querySelector(".result")
btn.forEach(function(btns){
    btns.addEventListner("click")

    switch(btns){
        case "1":
        result.innerText = 1;
        break;
    }
})
