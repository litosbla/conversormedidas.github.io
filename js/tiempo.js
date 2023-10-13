export function CalcularTiemS(opcion_inicial,opcion_final,input_valor){
    
const valores_hora_iniciales = {
    'seg':1 ,
    'minutos': 60,
    'hora': 3600
    
}
    
 


const valores_hora_finales = {
    'seg':1 ,
    'minutos': 1/60 ,
    'horas': 1/3600,
}
    
let result= input_valor * valores_hora_iniciales[opcion_inicial]*valores_hora_finales[opcion_final]

    return result
}