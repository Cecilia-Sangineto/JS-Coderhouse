// Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) 
// e imprima otras dos cadenas como salida (out1, out2).
// - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
// - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.

var str1 = "ARCO"
var str2 = "PERRO"

function conversor(str1,str2) {
    var out = []
    for (j of str2){
         var k = false

         for (i of str1){
             if (j == i){
                k = true
             }
         }

         if (k != true){
            out.push(j)
         }

         k = false }

    return out
}

console.log(conversor(str1,str2))
console.log(conversor(str2,str1))


