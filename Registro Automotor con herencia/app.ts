// Clase base Vehiculo
import Auto from "./Auto";
import Camion from "./Camion";
import Moto from "./Moto";
import RegistroAutomotor from "./RegistroAutomotor";
import Vehiculo from "./Vehiculo";


// Clases específicas para Autos, Motos y Camiones

// Ejemplo de uso
const registro = new RegistroAutomotor();

const auto = new Auto("Peugeot", "206", 2001);
const moto = new Moto("Honda", "250", 2017);
const camion = new Camion("lamborghini", "Gallardo", 2022);

// Agregar vehículos al registro
registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);

// Obtener y mostrar los vehículos
console.log(registro.obtenerVehiculos().map(vehiculo => vehiculo.toString()));

// Modificar un vehículo
registro.modificarVehiculo(1, new Moto("Kawasaki", "Ninja", 2021));

// Dar de baja un vehículo
registro.eliminarVehiculo(0);

// Mostrar el registro después de modificaciones
console.log(registro.obtenerVehiculos().map(vehiculo => vehiculo.toString()));
