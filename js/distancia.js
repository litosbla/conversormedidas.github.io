export default function calcularDistM(opcion_inicial,opcion_final,input_valor){
    //m ,km, milla, yarda,codo,mudo
    
const valores_distancia_iniciales = {
    'm':1 ,
    'km': 1000 ,
    'milla':1609.34 ,
    'yarda':0.9144,
    'codo': 0.445
}
    
 


const valores_distancia_finales = {
    'm':1 ,
    'km': 0.001 ,
    'milla':0.000621371 ,
    'yarda':1.09361 ,
    'codo': 2.247 
}
    
let result= input_valor * valores_distancia_iniciales[opcion_inicial]*valores_distancia_finales[opcion_final]

    return result
}