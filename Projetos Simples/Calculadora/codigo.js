let operador = "null";
let alternador = false;
let total = 0;
let num1 = " ";
let num2 = " ";

function sinal(a){
    alternador = true;
    if(a == 1){
        operador = " + ";
    } else if(a == 2){
        operador = " - ";
    } else if(a == 3){
        operador = " * ";
    } else{
        operador = " / ";
    };
    document.getElementById("1").value += operador;
};

    function addNum(n){
    if(alternador == false){
            num1 += n;
            document.getElementById("1").value = num1;
        }else{
            num2 += n;
            document.getElementById("1").value = num1 + operador + num2;
        }
    }

    function igual(){

        switch(operador){
            case " + ": total = parseInt(num1) + parseInt(num2);
            break;
            case " - ": total =  parseInt(num1) - parseInt(num2); 
            break;
            case " * ": total =  parseInt(num1) * parseInt(num2);
            break;
            case " / ": total =  parseInt(num1) / parseInt(num2);
            break;
        }
        document.getElementById("1").value = total;
        num1 = " ";
        num2 = " ";
        alternador = false;
    }
function apagarTudo(){
    document.getElementById("1").value = " ";
};
