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