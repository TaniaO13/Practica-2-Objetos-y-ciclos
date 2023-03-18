//Instanciar 5 tiendas, utilizando la clase tienda creada en el punto anterior
class Tienda {
    constructor(Nombre, Direccion, Propietario, Rubro) {
        this.Nombre = Nombre;
        this.Direccion = Direccion;
        this.Propietario = Propietario;
        this.Rubro = Rubro;
    }
}
const Tienda1 = new Tienda("Punto de Encuentro", "Cra 18 # 6-23", "Martha Diaz", "Viveres");
console.log(Tienda1);
const Tienda2 = new Tienda("Zara", "Centro comercial Bellavista local 302", "Sergio Ortiz", "Ropa");
console.log(Tienda2);
const Tienda3 = new Tienda("3j's", "AvCalle 32 # 6-45", "Julian Jaimes", "Licorera");
console.log(Tienda3);
const Tienda4 = new Tienda("Cajasan", "Calle 63 # 17e - 36", "Samir Valvuena", "Supermercado");
console.log(Tienda4);
const Tienda5 = new Tienda("People Place", "Centro comercial ciudadela Local 103", "Santiago Alarcon", "Zapatos");
console.log(Tienda5);