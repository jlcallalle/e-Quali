// ./src/modules/calculo.js
//crea módulo para exportar funciones
//exponer variable sumar para los que importan
// dentro del objeto, tenemos una propiedad llamda sumar y una funcion sumar


export const multiplicar = (a, b) => a * b;

export const saludo = () => console.log('Hola Modulo ES6');


//ES5
/*
function sumar(a, b) {
  return a + b;
}

//ES6
const sumar = (a, b) => {
  return a + b;
}

const sumar = (a, b) => a + b;
*/
