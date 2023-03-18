/* Dado el siguiente objeto, Obtener e imprimir por separado 3 propiedades utilizando usando notacion de punto
 y corchetes*/
const lion = {
    specier: "Panthera Leo",
    foots: 4,
    hasTail: true,
    weight: "190kg", 
    isMammal: true
};
console.log("foots= " + lion.foots);
console.log("Weight= " + lion["weight"]);
console.log("isMammal= " + lion.isMammal);
