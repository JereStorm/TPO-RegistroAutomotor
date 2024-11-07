import { Personaje } from "./Personaje";

// Clase Arquero
export class Arquero extends Personaje {
    private flechas: number;

    constructor(nombre: string, puntosDeVida: number, flechas: number) {
        super(nombre, puntosDeVida);
        this.flechas = flechas;
    }

    public dispararFlecha(): void {
        if (this.flechas > 0) {
            console.log(`${this.nombre} dispara una flecha!`);
            this.flechas--;
        } else {
            console.log(`${this.nombre} no tiene flechas!`);
        }
    }
    public defender(): void {
        super.defender();
        if (this.flechas > 0)
            this.flechas--;
        else {
            console.log(`${this.nombre} no tiene flechas!`);
        }
    }
}
