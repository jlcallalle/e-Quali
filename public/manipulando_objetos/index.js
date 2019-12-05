// 4- OBJETOS 

//Hay 2 formas 
const miObjecto = {}; //correcta 
const miObjecto2 = new Object();

miObjecto
{}
miObjecto2
{}

//Cuando se crea un objeto, siempre se va agregar propiedades
//si veo que tiene llave es de tipo Object {}

const miObjeto3 = { nombre : 'Jorge'};
// el nombre es una propiedad de mi objeto
// el texto es el valor que contiene la prepiedad

miObjeto3.nombre
"Jorge"

const miObjeto5 = {}
undefined
miObjeto5.nombre = 'Andrea';

miObjeto5.edad = 23;
miObjeto5.edad
miObjeto5
{nombre: "Andrea", edad: 23}

const miObjeto6 = {nombre:'Renzo', edad: 34};
miObjeto6

// Si se declara un objeto de una propiedad, se realiza en 1 linea
const auto1 = { marca: 'Toyota' };

// Si tiene más de 2 propiedades se usa 2 lineas, con linter (plugin) te notifica
const auto2 = {
  marca: 'Toyota',
  color: 'Verde'
}

const auto3 = {};
auto3.marca = 'Ford'; // Dentro de una propiedad, puedo asignar Tipo de Datos 'String'
auto3.color = 'Gris';
auto3.tieneAlarma = true; 

auto3.piezas = {}; // el objeto auto3 tiene una propiedad objeto piezas
auto3.piezas.motor = 'v8';



//PROOUEDADES POR DEFECTO DE LOS TIPOS DE DATOS
//Todo programacion como base tiene objetos  
//los numeros son objetos, los textos son objetos

En Object,
- hasOwnProperty

const empleado = {};
empleado.hasOwnProperty('nombre');
false
empleado.nombre = "Jorge"

empleado.hasOwnProperty('nombre');
true
empleado
{nombre: "Jorge"}



/*****************************************************/
/********** Creando estructura de datos  *************/
/*****************************************************/

// Los objetos son similares, pero los valores cambian
// Este es un array que contiene 2 objetos (Arreglo de Objetos)

const menu = [
  {
    name: 'Inicio',
    url: '/index.html'
  },
  {
    name: 'Productos',
    url: '/productos.html'
  }
];

menu[1] //para acceder a arrays es con []
> {name: "Productos", url: "/productos.html"}
menu[1].name //para acceder a objetos es con .
> "Productos"
menu[0]
> {name: "Inicio", url: "/index.html"}
menu[0].url
> "/index.html"
menu[0].name
> "Inicio"


//Objeto de arreglos
const auto = {
  llantas : [
    { estado: 'ok'},
    { estado: 'ok'},
    { estado: 'ok'},
    { estado: 'pinchada'}
  ]
}

auto.llantas[3]
> {estado: "pinchada"}
auto.llantas[3].estado
> "pinchada"

const familia2 = {
  padre: { nombre: 'Alberto'},
  madre: { nombre: 'Andre'},
  hijos: [
    { nombre: 'julio'},
    { nombre: 'Carlos'},
    { nombre: 'Jorge'}
  ]
}


//Para llamar un objeto {} se usa .
familia2.madre.nombre
>  "Andre"
familia2.padre.nombre
>  "Alberto"
familia2.hijos[2]
>  {nombre: "Jorge"}
familia2.hijos[2].nombre
>  "Jorge"


// En objetos hay una asignación
const obj = {
  name: 'Liz'
}
familia.push ( { nombre: 'Carlos'}  ) 


//EJERCICIOS
//Un padre tienes 2 hijos, cada hijo tiene un nombre y una edad.
 
const padre = {
  nombre: 'Julio',
  hijos: [
    {
      nombre: 'Pedro',
      edad: 12
    },
    {
      nombre: 'Juan',
      edad: 7
    }
  ]
};

console.log(padre.hijos[0].nombre); // Pedro

//--

const padre = {
  nombre: 'Julio',
  hijos: [
    {
      nombre: 'Pedro',
      edad: 36,
      hijos: [
        {
          nombre: 'Mateo',
          edad: 3
        },
        {
          nombre: 'Diana',
          edad: 1
        }
      ]
    },
    {
      nombre: 'Juan',
      edad: 17
    }
  ]
};

console.log(padre.hijos[0].hijos[1].nombre); // Diana

//--

const tabla1 = [
	{ name: 'AmeriGas', shares: 200 },
	{ name: 'Duke Energy', shares: 150 }
];
console.log(tabla1[0].shares); // 200


const item1 = { name: 'AmeriGas', shares: 200 };
const item2 = { name: 'Duke Energy', shares: 150 };
const tabla2 = [ item1, item2 ];

console.log( tabla2[1].shares ); // 150











//RECORRIENDO OBJETOS


// --

const alumnos = ['Carlos', 'Diana', 'Pedro'];

let i;
for (i = 0; i < alumnos.length; ++i) {
  console.log(`${i} es ${alumnos[i]}`);
}


// for in
let key;
const auto = { marca: 'ford', color: 'azul' };

for (key in auto) {
  console.log(key, auto[key]);
}
// marca
// color


// for of   // ES6+
let alumno;
const alumnos = ['Pedro', 'Diana', 'Jorge'];

for (alumno of alumnos) {
  console.log(alumno);
}
// Pedro
// Diana
// Jorge


// --

const alumnos = ['Carlos', 'Diana', 'Pedro'];

alumnos.forEach(function (alumno, indice, arreglo) {
  console.log(alumno, indice, arreglo);
});

alumnos.forEach(function (alumno, indice) {
  console.log(alumno, indice);
});

alumnos.forEach(function (alumno) {
  console.log(alumno);
});











///

//Fech

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
  console.log(json);
})

//DEMO ..supuesto
function fech (url) {
  return new Promise(function (resolve, reject){

  })
}

//estas peticiones son en paralelos
fetch('https://data.com/page1')
  .then(data => {console.log(1, data)});

fetch('https://data.com/page2')
  .then(data => {console.log(2, data)});

//
Promise.all(fetch('https://data.com/page1') , fetch('https://data.com/page2'))



//RETO PROMESA
// https://gist.github.com/renzocastro/5e5be729aa83a2409c9ebf3ee9f1aa64
// http://bit.ly/2E1Ys5M

//-
const request = new XMLHttpRequest()
request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload = function () {
 console.log('DONE', request.responseText);
};

request.onerror = function () {
 console.log('FAIL', 'Error loading page');
};

request.send();


//-

const nuevo = new Promise(function( resolve, reject ){

 const request = new XMLHttpRequest()
 request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
 
 request.onload = function () {
   console.log('DONE', request.responseText);
   resolve(request.responseText);
 };
 
 request.onerror = function () {
   console.log('FAIL', 'Error loading page');
   reject('Error landing page');
 };
 
 request.send();

})


//-
const fecth2 =  url => {

 return  new Promise(function( resolve, reject ){
   
     const request = new XMLHttpRequest()
     request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
     
     request.onload = function () {
       console.log('DONE', request.responseText);
       resolve(request.responseText);
     };
     
     request.onerror = function () {
       console.log('FAIL', 'Error loading page');
       reject('Error landing page');
     };
     
     request.send();
   
   })
 
 };

// async / await, se usan en promesas
//async function ().... 
// va pasar codigo