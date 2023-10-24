window.addEventListener('storage', event => {
    // El localStorage ha cambiado
  });
  //Comprobar periódicamente si ha cambiado una clave específica:
  
  
const key = 'myKey';
const oldValue = localStorage.getItem(key);

setInterval(() => {
const newValue = localStorage.getItem(key);
if (newValue !== oldValue) {
    // Valor cambiado
    oldValue = newValue;
} 
}, 1000);

//Usar una librería como localForage que tiene eventos para detectar cambios


import localforage from 'localforage';

localforage.config({
onChanged: function(key, val) {
    // Almacenamiento cambió
}
})

const DATA =[
    {id:1, title:'first'},
    {id:2, title:'second'},
    {id:3, title:'third'},
    {id:4, title:'fourth'}
]

const upperDat = DATA.map(elemento=> elemento.title.toUpperCase())

const moduloData = DATA.filter(elemento => elemento.id % 2 == 0)

const itemIdx =DATA.findIndex(elemento => elemento.id ==2) // al ser una lista devuelve un index

// Guardar un string
localStorage.setItem('clave', 'valor'); 

// Guardar un objeto JSON
localStorage.setItem('datos', JSON.stringify({nombre: 'Juan'}));
//Para obtener un valor:


// Obtener un string
const valor = localStorage.getItem('clave');

// Obtener un objeto JSON
const datos = JSON.parse(localStorage.getItem('datos'));
// para eliminar una clave del localStorage:


localStorage.removeItem('clave');


//para limpiar todo el localStorage:

localStorage.clear();


//Para remover de una lista:


let lista = [1, 2, 3, 4];

lista = lista.filter(x => x !== 3); // lista = [1, 2, 4]

lista.splice(1, 1); // lista = [1, 3, 4]

//Para eliminar de un objeto (diccionario):

let obj = {a: 1, b: 2};

delete obj.b;// obj = {a: 1}


// Para agregar a un array:

let lista1 = [1, 2, 3];

lista1.push(4); // lista1 = [1, 2, 3, 4]


//Con .unshift() para agregar al inicio:


lista.unshift(0); // lista = [0, 1, 2, 3, 4]

//Reasignando el array con spread operator:

lista = [...lista, 5];// lista = [0, 1, 2, 3, 4, 5]

//Para agregar a un objeto: Simplemente asignando una nueva propiedad:

let object = {a: 1, b: 2};

object.c = 3;

// obj = {a: 1, b: 2, c: 3} Reasignando el objeto con spread operator:


obj = {...obj, d: 4}; // obj = {a: 1, b: 2, c: 3, d: 4}

//Con Object.assign(): funciona como un extend pero para diccioarios

Object.assign(obj, {e: 5}); // obj = {a: 1, b: 2, c: 3, d: 4, e: 5}