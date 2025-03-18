let number = "";
let number2 = "";
let operador = "";
let marcador = 1;

let btn = document.querySelectorAll(".key");
let result = document.querySelector(".result")

btn.forEach(function(btns){
    btns.addEventListener("click", function(){
        function escolhanumber(){
            if(marcador === 1){
               number = result.innerText
               marcador++
            }else{
               number2 = result.innerText
            }
       }
        switch(btns){
            case "1":
            escolhanumber()
            break;
        }

        update()
    })
})

function update(){
    if(number === ""){
        result.innerText = "0"
    }else{
        result.innerText = number + operador + number2
    }
}
