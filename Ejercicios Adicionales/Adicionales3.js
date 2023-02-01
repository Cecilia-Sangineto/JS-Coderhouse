// Crear un HTML que tenga 3 etiquetas que digan “Hacer Click!”. 
// a. Desde JavaScript programar que cuando se haga click en cada boton devuelva por consola “Hiciste click” 
// b. Ahora hacer que al hacer click en el boton cambie el color de fondo.(Cuidado!! Solamente el boton que estoy clickeando , no todos los botones). 
// c. Hacer un contador en JavaScript que cuente las veces que se clickea cada boton.​

// //Creamos los botones en el DOM

let titulo = document.createElement('p');
titulo.textContent = "Botones";
document.body.appendChild(titulo)

for( i = 0; i < 3; i++){
    let item = document.createElement('button');
    item.textContent = "Haz click aqui";
    titulo.appendChild(item)
}

let botones = document.querySelectorAll("button");
//a y b
botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        console.log("Hiciste Click")
        //boton.classList.add("fondo")
        boton.style.backgroundColor = "pink"
    })
})

//punto c
let contador = 0;
botones.forEach((boton) => {
    boton.addEventListener('click', () => {
        contador = contador + 1
        console.log(`el boton  se clickeo ${contador} veces`)
    })
})
