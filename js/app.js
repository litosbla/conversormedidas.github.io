import calcularPesoKg from "./peso.js";
import calcularDistM from "./distancia.js";
import {calcularTempC as calorcito} from "./temperatura.js"
import {CalcularTiemS as horita} from "./tiempo.js"


const clase = document.getElementById("opciones_originales");
let mivalor = document.getElementById("valor"); // input donde se guarda valor a transformar
const selecitionInicial = document.getElementById("opciones_originales")
const selecitionFinal = document.getElementById("opciones_finales")

const resultado = document.getElementById("resultado");
const result = document.getElementById("result");
const titu= document.getElementById('tit')




function convertir(){
    let valor_resultado =0
    console.log(titu.textContent)
    switch (titu.textContent) {
        case "temperatura":
            
            valor_resultado = calorcito(selecitionInicial.value,selecitionFinal.value,mivalor.value);
          break;
        case "distancia":
            valor_resultado = calcularDistM(selecitionInicial.value,selecitionFinal.value,mivalor.value).toFixed(2);
          break;
        case "peso":
            valor_resultado = calcularPesoKg(selecitionInicial.value,selecitionFinal.value,mivalor.value);
          break;
        case "tiempo":
            valor_resultado = horita(selecitionInicial.value,selecitionFinal.value,mivalor.value);
          break;
    
        default:
          console.log("Lo lamentamos, por el momento no has seleccionando");
      }
    
    
    console.log(valor_resultado)
    resultado.innerHTML=`<span> ${mivalor.value} ${selecitionInicial.value} son ${valor_resultado} ${selecitionFinal.value}</span>`
  
    result.value= valor_resultado
    
};
//m ,km, milla, yarda,codo,mudo
//kelvin, farenheight celcius
// seg, minutos, horas
const botoncito = document.getElementById("botoncito")
botoncito.addEventListener("click",convertir)







