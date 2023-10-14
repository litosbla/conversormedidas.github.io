export default function calcularPesoKg(opcion_inicial,opcion_final,input_valor){

    const valores_pesos_iniciales = {
        'kg':1 ,
        'lb': 0.453592 ,
        'arroba':11.502 ,
        'gramos':0.001 ,
        'onza': 0.03 
    }
    
 


    const valores_pesos_finales = {
        'kg':1 ,
        'lb': 2.20462 ,
        'arroba':0.0869 ,
        'gramos':1000 ,
        'onza': 35.274 
    }
let result= input_valor * valores_pesos_iniciales[opcion_inicial]*valores_pesos_finales[opcion_final]
console.log("formula")

    return result
}

