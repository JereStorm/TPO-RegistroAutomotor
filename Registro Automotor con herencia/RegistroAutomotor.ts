import Vehiculo from "./Vehiculo";

// Clase RegistroAutomotor que contiene una lista de vehículos (Composición)
class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    constructor() {
        this.vehiculos = [];
    }

    // Método para agregar un vehículo
    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    // Método para obtener todos los vehículos
    public obtenerVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    // Método para modificar un vehículo (buscar por índice y modificar)
    public modificarVehiculo(indice: number, vehiculo: Vehiculo): void {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos[indice] = vehiculo;
        } else {
            console.log('Índice inválido');
        }
    }

    // Método para eliminar (dar de baja) un vehículo por índice
    public eliminarVehiculo(indice: number): void {
        if (indice >= 0 && indice < this.vehiculos.length) {
            this.vehiculos.splice(indice, 1);
        } else {
            console.log('Índice inválido');
        }
    }
}

export default RegistroAutomotor;