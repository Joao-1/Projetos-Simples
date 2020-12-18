let numero = " ";
let total = 0;
let apagadorControll = " ";
let dataBase = [];

document.getElementById("1").addEventListener("keyup", function(event){
        let tecla = event.keyCode;
        console.log(tecla);
        
        if(tecla == 73){
            numero = "i";
        } else if(tecla == 86){
            numero = "v";
        } else if(tecla == 88){
            numero = "x";
        } else if(tecla ==76){
            numero = "l";
        } else if(tecla == 67){
            numero = "c";
        } else if(tecla == 68){
            numero = "d";
        } else if(tecla == 77){
            numero = "m"
        }else if(tecla == 8){
            numero = "apagar";
        } else{
            window.alert("Essa letra nao eh romana");
        }
        converter(numero);
    });

function converter(a){

        switch(a){
            case "i": total += 1, dataBase.push("1");
            break;
            case "v": total += 5, dataBase.push("v")
            break; 
            case "x": total += 10, dataBase.push("x")
            break;
            case "l": total += 50, dataBase.push("l")
            break;
            case "c": total += 100, dataBase.push("c")
            break;
            case "d": total += 500, dataBase.push("d")
            break;
            case "m": total += 1000, dataBase.push("m")
            break;
            case "apagar": apagar();
            break;
            default: total += 0;
        }
        console.log(dataBase)
        document.getElementById("2").value = total;
}


function apagar(){
    let ultimo = dataBase.pop();
    
    if(ultimo == "i"){
        total - 1;
    } else if(ultimo == "v"){
        total -= 5;
    } else if(ultimo  == "x"){
        total -= 10;
    } else if(ultimo =="l"){
        total -= 50;
    } else if(ultimo == "c"){
        total -= 100;
    } else if(ultimo == "d"){
        total -= 500;
    } else if(ultimo == "m"){
        total -= 1000;
    }
}
