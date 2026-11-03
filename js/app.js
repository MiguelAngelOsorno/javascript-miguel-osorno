const opcion = document.getElementById("opcion");
const imagen = document.querySelector("img");
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const salida = document.getElementById("salida");

opcion.addEventListener("change", function () {
    let seleccion = opcion.value;
    
    let num1 = parseFloat(inputNum1.value);
    let num2 = parseFloat(inputNum2.value);
    let resultado = 0;

    if (seleccion === "suma") {
        imagen.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAACUCAMAAAAXgxO4AAAAY1BMVEX///8BAQEAAADR0dE7Ozv39/doaGh/f3/8/PzZ2dlra2sNDQ0eHh7y8vJWVlazs7NcXFy8vLytra2Kiork5OQVFRXr6+vDw8Obm5tDQ0OmpqZPT0+SkpIwMDAqKirJycl0dHRI7K0iAAAC4UlEQVR4nO2c65KiMBBGIYg0F7mIqOM4yvs/5Sbqzs7OcomV2M3Ufket8g96qqujJHwkCAAAAACwJIikDZ5jHzVVVUV7aY8nubb1qlMqX9XJVdrFGgriulCfFPVG2sgSanLtGz7Qb/NGWskCItoWKjSPT1RRLX+AUnAovjg/zC8Haa956F9vU/NY2muWdsBbmyfSXnPshgpuSr6TNpuEgqMaFldHabdJiLJBby2eSbtNs6+HxUNVL/vPP30bE39Lpd0miVZj4qtI2m0SiHMDcW4gzg3EuYE4NxDnBuLcQJwbiHMDcW4gzg3EuYE4NxDnBuLcQJyb5YmTXezESZweLwkWdw2INtGpTebJhq/PhkoVmcXh7Sna+Ks5BRS1ubJkuOCh7eEqb6PYT8NQsE+KUSHfmGRO4uOSqB6TUc2m/XCvPfwCkRlvrN6m6D5G8u79r7QPh7hWf3cPWyTc3sbc5FscB2jK3Ce/3ZVrs/T8Bb+b927ecS6ibdrFLcV1kOkU0ytuwbmRpBKHuFsWKpETd8vN9XLi/f9Z8bOc+NlJvBES1+crbhHojVzFnc5tKSilxEunguuT8fFJzUu9lfMpucmc8qurtfP0LR1bcHip9yp1n3c2IxP3V3oXjY8VlsMHa5vrQfXh5W4QPessc+chanu4WaAoPfTJnc02s14XmTCyI9v6vG9oH1Vtv54lK7uxlayuziyOb283mflczNKveB66ji96Xq0+4M/38bK8ZWZLIM4NxLmBODcQ5wbi3ECcG4hzA3FuIM4NxLmBODcQ5wbi3ECcG4hzA3FuIM7NRH582eK7sbSFj9DpK5nYJ2vhG/Cdh6/RuiaVXk86thfcsrfJCu75lgHxtbTXLAMpLuWasOKAgkp9C0Ab70rsBh976Nh9S0Op/Lh8bU18Cm/tou7l1s/T8jfGvEFp9zWA0kU/ot53qvJyk+8uZSXt8iS75ty258r80f+gggMAAAAA+OEXCEAt30jt3QsAAAAASUVORK5CYII=";
        resultado = num1 + num2;
        salida.textContent = "Resultado de la Suma: " + resultado;
    } else if (seleccion === "resta") {
        imagen.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACUCAMAAAAqEXLeAAAAHlBMVEX///8AAACrq6saGhr29vb7+/sVFRWcnJyvr6+kpKRlCDDZAAAAWElEQVR4nO3Rhw3AIAAEMUgj7L8wyg6P0uwJTrpSAAAAAAAAAAAAnm6/O+AbtrgJa+qaddR04RUZJ1KkSJEiRYoU+YbIdi5ZfUIkAAAAAAAAAAAAAAB/MAA4Swd6WA9rpgAAAABJRU5ErkJggg==";
        resultado = num1 - num2;
        salida.textContent = "Resultado de la Resta: " + resultado;
    } else if (seleccion === "multiplicacion") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76KXbHZf-4c39mM2sMPyAlndj6FSuCmTNy3XuksvF6Q&s=10";
        resultado = num1 * num2;
        salida.textContent = "Resultado de la Multiplicación: " + resultado;
    } else if (seleccion === "division") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DlQ3xTXgniLmSWHIEcrAtof6K-jUqluLPIzYn6twjA&s=10";
        if (num2 === 0) {
            salida.textContent = "No se puede dividir entre cero.";
        } else {
            resultado = num1 / num2;
            salida.textContent = "Resultado de la División: " + resultado;
        }
    } else {
        imagen.src = "https://static.wikia.nocookie.net/winner/images/d/d6/Operaciones_basicas_de_matematicas.jpg/revision/latest?cb=20130627200513&path-prefix=es";
        salida.textContent = "";
    }
});