// comprobador de usuario-contrasenia
let usuarios = ["Juan", "Ceci", "Rocio"]
let password = "password123"

let validar_usuario  = (usuario_ingresado) => {
    for (index of usuarios) {
        if (index == usuario_ingresado) { return true }
    }
     return false
}

let usuario_ingresado = prompt("Ingrese su usuario")

if (validar_usuario(usuario_ingresado)) {
    let password_ingresada = prompt("Ingrese su contraseña")
    if (password == password_ingresada) {
        alert("Ha accedido correctamente.")
    } else {
        alert("Contraseña incorrecta")
    }
} else { alert("usuario incorrecto") }