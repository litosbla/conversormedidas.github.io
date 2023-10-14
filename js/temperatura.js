/* export function calcularTempC(celsius){
    const fahrenheit = (celsius*9/5) + 32
    return fahrenheit
} */



//        'temperatura':['kelvin','farenheight','celcius','rankine'],

export function calcularTempC (opcion_inicial,opcion_final,input_valor){
    let result = 0
    console.log(opcion_inicial,opcion_final)

   if (opcion_inicial =="kelvin" && opcion_final=="fahrenheit"){
        result= 1.8*(input_valor - 273.15) + 32
        console.log(2)
    }
    else if(opcion_inicial =="kelvin" && opcion_final=="celsius"){
        result= input_valor - 273.15 
        console.log(3)
    }
    else if(opcion_inicial =="celsius" && opcion_final=="fahrenheit"){
        result= input_valor*(9/5)+32
        console.log(4)
    }
    else if(opcion_inicial =="celsius" && opcion_final=="kelvin"){
        result=input_valor+273.15
        console.log(5)
    }
    else if(opcion_inicial =="fahrenheit" && opcion_final=="kelvin")
    {
        result=(input_valor-32)*(5/9) + 273.15
        console.log(6)
    }
    else if(opcion_inicial =="fahrenheit" && opcion_final=="celsius")
    {
        result=(input_valor-32)*5/9
        console.log(7)
    }
    else {
        result=input_valor

    }
    console.log(result)


        
        return result
    }
    
    