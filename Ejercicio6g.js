/*Con el siguiente array realiza la operacion que se presenta a continuacion: 
g. Hay dos formas de acceder al indice de su nombre (que es el ultimo), describe cuales son*/
let people = ["Ana", "Carolina", "Laura", "Natalia", "Fernanda"];
people.push("Tania");
console.log(people);
console.log("El indice de mi nombre es " + people.indexOf("Tania") + " en el array");
console.log(people.length-1 + " es el indice de mi nombre en el array");