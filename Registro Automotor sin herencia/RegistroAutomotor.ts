import Auto from "./Auto";
import Camion from "./Camion";
import Moto from "./Moto";

// Clase RegistroAutomotor
class RegistroAutomotor {
    private autos: Auto[];
    private camiones: Camion[];
    private motos: Moto[];

    constructor() {
        this.autos = [];
        this.camiones = [];
        this.motos = [];
    }

    // Métodos para Autos
    public agregarAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    public obtenerAutos(): Auto[] {
        return this.autos;
    }

    public modificarAuto(indice: number, auto: Auto): void {
        if (indice >= 0 && indice < this.autos.length) {
            this.autos[indice] = auto;
        } else {
            console.log('Índice inválido');
        }
    }

    public eliminarAuto(indice: number): void {
        if (indice >= 0 && indice < this.autos.length) {
            this.autos.splice(indice, 1);
        } else {
            console.log('Índice inválido');
        }
    }

    // Métodos para Motos
    public agregarMoto(moto: Moto): void {
        this.motos.push(moto);
    }

    public obtenerMotos(): Moto[] {
        return this.motos;
    }

    public modificarMoto(indice: number, moto: Moto): void {
        if (indice >= 0 && indice < this.motos.length) {
            this.motos[indice] = moto;
        } else {
            console.log('Índice inválido');
        }
    }

    public eliminarMoto(indice: number): void {
        if (indice >= 0 && indice < this.motos.length) {
            this.motos.splice(indice, 1);
        } else {
            console.log('Índice inválido');
        }
    }

    // Métodos para Camiones
    public agregarCamion(camion: Camion): void {
        this.camiones.push(camion);
    }

    public obtenerCamiones(): Camion[] {
        return this.camiones;
    }

    public modificarCamion(indice: number, camion: Camion): void {
        if (indice >= 0 && indice < this.camiones.length) {
            this.camiones[indice] = camion;
        } else {
            console.log('Índice inválido');
        }
    }

    public eliminarCamion(indice: number): void {
        if (indice >= 0 && indice < this.camiones.length) {
            this.camiones.splice(indice, 1);
        } else {
            console.log('Índice inválido');
        }
    }
}


export default RegistroAutomotor;