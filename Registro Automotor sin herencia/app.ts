// Clase base Vehiculo
import Auto from "./Auto";
import Camion from "./Camion";
import Moto from "./Moto";
import RegistroAutomotor from "./RegistroAutomotor";

const registro = new RegistroAutomotor();

const auto = new Auto("Toyota", "Corolla", 2020);
const moto = new Moto("Yamaha", "R3", 2018);
const camion = new Camion("Mercedes", "Actros", 2022);

registro.agregarAuto(auto);
registro.agregarMoto(moto);
registro.agregarCamion(camion);

console.log("Autos:", registro.obtenerAutos());
console.log("Motos:", registro.obtenerMotos());
console.log("Camiones:", registro.obtenerCamiones());

registro.modificarAuto(0, new Auto("Honda", "Civic", 2021));
registro.eliminarMoto(0);

console.log("Autos después de modificar:", registro.obtenerAutos());
console.log("Motos después de eliminar:", registro.obtenerMotos());
