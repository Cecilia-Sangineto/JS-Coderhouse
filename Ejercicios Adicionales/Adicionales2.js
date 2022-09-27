//Dado el siguiente array mostrar, utilizando bucles ,
//en forma de lista en el Navegador los ítems del array; debajo del titulo “Algunos Metodos" ​
//let metodos =["createElement()","appendChild()", "insertBefore()", “removeChild()","replaceChild()", "removeAttribute()","classList.add()","classList.remove()","classList.toggle()"]​

// Creamos el nodo en el body del documento

let elemento = document.createElement('p');
elemento.textContent = "Algunos metodos";
document.body.appendChild(elemento)

// Concatenamos por medio de un for of los metodos de mi lista de metodos

let nodoPadre = document.getElementById('metodos')
let lista = document.createElement('ul');
let metodos = ["createElement()", "appendChild()", "insertBefore()", "removeChild()", "replaceChild()", "removeAttribute()", "classList.add()", "classList.remove()", "classList.toggle()"]

for (metodo of metodos) {
    let item = document.createElement('li');
    item.textContent = metodo;

    lista.appendChild(item)
}

elemento.appendChild(lista)