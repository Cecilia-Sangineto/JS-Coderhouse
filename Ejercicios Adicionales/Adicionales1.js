// Armar una funcion que tome cinco números ingresados por medio de un prompt 
// y devuelva el promedio de dichos números.​

let numeros = [] // 1,2,3,4,5

function calcular_promedio() {
    let suma = 0;
    let i = 0;

    for (num of numeros) {
        suma = suma + parseInt( num );
        i++;
    }
    return (suma/i);
}

for (let i = 0; i < 5; i++) {
    let numero = prompt("Ingrese el numero de la posicion:" + i)
    numeros.push(numero)
}

alert (" El promedio de los numeros ingresados es : " + calcular_promedio())