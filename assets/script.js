let number = "";
let number2 = "";
let operador = "";
let marcador = "";

let btn = document.querySelectorAll(".key");
let result = document.querySelector(".result")

btn.forEach(function(btns){
    btns.addEventListener("click", function(){
        switch(btns.innerText){
            case "1":
            result.innerText = 1;
            break;
        }
        
        update()
    })
})

function update(){
    if(number === ""){
        result.innerText = "=="
    }else{
        result.innerText = number + operador + number2
    }
}
