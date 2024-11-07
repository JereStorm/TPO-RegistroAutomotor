import { Personaje } from "./Personaje";

// Clase Luchador
export class Luchador extends Personaje {
    private fuerza: number;

    constructor(nombre: string, puntosDeVida: number, fuerza: number) {
        super(nombre, puntosDeVida);
        this.fuerza = fuerza;
    }

    public golpear(): void {
        console.log(`${this.nombre} golpea con fuerza ${this.fuerza * 0.5}!`);
        this.puntosDeVida--;
    }
}