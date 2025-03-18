let number = "";
let number2 = "";
let operador = "";
let marcador = 1;

let btn = document.querySelectorAll(".key");
let result = document.querySelector(".result")

btn.forEach(function(btns){
    btns.addEventListener("click", function(){
        switch(btns.innerText){
            case "1":
            escolhanumber()
            break;
        }

        update()
    })
})
function escolhanumber(){
     if(marcador === 1){
        number = result.innerText
        marcador++
     }else{
        number2 = result.innerText
     }
}
function update(){
    if(number === ""){
        result.innerText = "=="
    }else{
        result.innerText = number + operador + number2
    }
}
