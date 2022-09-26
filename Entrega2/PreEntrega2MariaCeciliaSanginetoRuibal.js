// Objetos 
class Prenda {
    constructor(precio, tipo, cantidad) {
        this.precio = precio
        this.tipo = tipo
        this.cantidad = cantidad
    }

    precio_total() {
        return (this.precio * this.cantidad)
    }
}

let prendas = []

let agregar = document.querySelectorAll('button')[0]
let mostrar = document.querySelectorAll('button')[1]
let total = document.querySelectorAll('button')[2]

agregar.addEventListener('click', () => {
    let precio = prompt("Ingrese precio de su prenda.")
    let tipo = prompt("Ingrese tipo de prenda")
    let cantidad = prompt("Ingrese la cantidad a comprar")
    let prenda = new Prenda(precio, tipo, cantidad)

    prendas.push(prenda)
    alert(prendas.length)
})


let zonaPrenda = document.getElementById("mostrar-productos")
mostrar.addEventListener('mouseover', () => {
       
})

mostrar.addEventListener('mouseout', () => {

})


let zonaDefinicion = document.getElementById('total-productos')
let element = document.createElement('p')
zonaDefinicion.appendChild(element)
total.addEventListener('click', () => {
    let cantidad_total = 0
    for (index of prendas) {
        cantidad_total = +  index.precio_total()
    }
    element.textContent = cantidad_total
})

