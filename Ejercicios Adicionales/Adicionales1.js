// Armar una funcion que tome cinco números ingresados por medio de un prompt 
// y devuelva el promedio de dichos números.​

let numeros = []

function calcular_promedio() {
    let suma = 0;
    let i = 0;

    for (index of numeros) {
        suma = suma + parseInt( index )
        i++
    }
    return (suma/i)
}

for (let i = 0; i < 5; i++) {
    let numero = prompt("Ingrese el numero :" + i)
    numeros.push(numero)
}

alert (" El promedio de los numeros ingresados es : " + calcular_promedio())
