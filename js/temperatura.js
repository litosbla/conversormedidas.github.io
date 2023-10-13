/* export function calcularTempC(celsius){
    const fahrenheit = (celsius*9/5) + 32
    return fahrenheit
} */



//        'temperatura':['kelvin','farenheight','celcius','rankine'],

export function calcularTempC (opcion_inicial,opcion_final,input_valor){
    let result = 0
    console.log(opcion_inicial,opcion_final)
    if(opcion_inicial == opcion_final ){
        result=input_valor
    } else if (opcion_inicial =="kelvin" && opcion_final=="fahrenheit"){
        result= 1.8*(input_valor - 273.15) + 32
    }
    else if(opcion_inicial =="kelvin" && opcion_final=="celsius"){
        result= input_valor - 273.15 
    }
    else if(opcion_inicial =="celsius" && opcion_final=="fahrenheit"){
        result= input_valor*(9/5)+32
    }
    else if(opcion_inicial =="celsius" && opcion_final=="kelvin"){
        result=input_valor+273.15
    }
    else if(opcion_inicial =="fahrenheit" && opcion_final=="kelvin")
    {
        result=(input_valor-32)*(5/9) + 273.15
    }
    else if(opcion_inicial =="fahrenheit" && opcion_final=="celsius")
    {
        result=(input_valor-32)*5/9
    }

    else {
        console.log("Heyy bro, no se porque llegaste acá, no se puede")

    }



        
        return result
    }
    
    