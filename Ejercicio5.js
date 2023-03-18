/* Has un algoritmo que cuente el numero de veces que aparece la r en la frase: 
"Erre con erre cigarro erre con erre barril rapido ruedan los carros cargados de azucar del ferrocarril".
Imprime el resultado en pantalla */
function contar() {
    let frase = "Erre con erre cigarro erre con erre barril rapido ruedan los carros cargados de azucar del ferrocarril"
    let fraseDividida = Array.from(frase)
    let contador = 0
    for(i=0; i<fraseDividida.length; i++) {
      if(fraseDividida[i] === "r") {
        contador++
      }else{
      }
    }
    return contador
  }
  
  console.log("la frase tiene " + contar() + " r")