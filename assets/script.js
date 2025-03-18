let number = "";
let number2 = "";
let operador = "";
let marcador = 1;

let btn = document.querySelectorAll(".key");
let result = document.querySelector(".result")

btn.forEach(function(btns){
    btns.addEventListener("click", function(){
        
        switch(btns){
            case "1":
                if(marcador === 1){
                    number = result.innerText
                    marcador++
                 }
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
