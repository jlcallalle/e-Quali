fetch('http://data.fixer.io/api/latest?access_key=9e1910b221f5db999a84e0c82d049cf0')
  .then(response => response.json())
  .then(json => {
    console.log(json);

    //manipular json
    const precioDolar = json.rates.USD;
    const listaTipos = json.rates;
    const keynames = Object.keys(listaTipos);
    const valores = Object.values(listaTipos);
    console.log(`El precio del Dolar es ${precioDolar}`)
    console.log(`listaTipo ${listaTipos}`);
    //console.log(`keynames ${keynames}`);
    //console.log(`valores ${valores}`);


    //-- EJERCICIO 1:  Calcular: EUR a USD  

    const inputEuro = document.querySelector('#input-euros');
    const inputDolar = document.querySelector('#input-dolar');
    const btnEnvio = document.querySelector('#btn-envio');
    
    const onClickCalcular = event => {
      const valorEuro = inputEuro.value;
      const convertir = parseInt(valorEuro) * precioDolar;
      const resultadoDecimal = convertir.toFixed(2);

      if (!valorEuro == '') {
        inputDolar.value = resultadoDecimal;
        console.log(`La conversion de ${valorEuro} euros equivale a:  ${resultadoDecimal} USD`);
      } else {
        alert('Ingresar cantidad de euros');
      }
    };
    btnEnvio.addEventListener('click', onClickCalcular )




    //-- EJERCICIO 2:  Calcular: SELECT a USD  
  
    const selectTipo = document.querySelector('#select-tipo');
    const inputMoneda = document.querySelector('#inputMoneda');
    const dolarSelect = document.querySelector('#dolarSelect');
    const btnEnvioSelect = document.querySelector('#btn-envio-select');

    //-- Mostrar Select Tipo Cambio
    keynames.forEach(function (key, i, arreglo) {
      var opt = keynames[i];
      selectTipo.innerHTML += `<option value = '${valores[i]}'> ${keynames[i]} </option>`;
    });

    //-- Mostrar Precio
    const onChangeSelect =  event => {
      const valorSelect = event.target.value;
      console.log('valor select', valorSelect);
      const cantidad = document.querySelector('#cantidad');
      cantidad.innerHTML = valorSelect;

      const showPrecio = document.querySelector('#precio')
      showPrecio.style.display = 'block';

      if (valorSelect == 'Selecccione') {
        showPrecio.style.display = 'none';
      }
    };
    selectTipo.addEventListener('change', onChangeSelect);

   
    const onClickCalcularSelect = event => {
      const precioCantidad = document.querySelector('#cantidad').textContent;
      //console.log(typeof precioCantidad)
      const valorMoneda = inputMoneda.value;
      const calculo = valorMoneda * precioCantidad;
      const calculoUSD = calculo * precioDolar;
      const calculoUSDFinal = calculoUSD.toFixed(2);
      //console.log('precio cantidad', precioCantidad);
      //console.log('valor moneda', valorMoneda);
      //console.log('calculo', calculo);
      //console.log('calculoUSD', calculoUSD);
      if (!valorMoneda == '') {
        dolarSelect.value = calculoUSDFinal;
      } else {
        alert('Ingresar cantidad moneda');
      }
    };

    btnEnvioSelect.addEventListener('click', onClickCalcularSelect);
  })



// ./src/index.js
//import: importa funciones que han sido exportadas desde un módulo externo
import { sumar } from './modules/utils';
const resultadoSumar = sumar(5, 2);


import { multiplicar, saludo} from './modules/calculo';
const resultadoMultiplicar = multiplicar(5, 10);

console.log('El resultado de la suma es', resultadoSumar);
console.log('El resultado de la multiplicar es:', resultadoMultiplicar);
saludo();
