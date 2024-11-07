import { Personaje } from "./Personaje";

// Clase Mago
export class Mago extends Personaje {
    private mana: number;
    private escudo: boolean;

    constructor(nombre: string, puntosDeVida: number, mana: number) {
        super(nombre, puntosDeVida);
        this.mana = mana;
        this.escudo = true;
    }

    public lanzarHechizo(): void {
        if (this.mana > 0) {
            console.log(`${this.nombre} lanza un hechizo!`);
            this.mana -= 10;
        } else {
            console.log(`${this.nombre} no tiene suficiente mana!`);
        }
    }

    public defender(): void {
        super.defender();
        if (this.escudo) console.log(`Se uso el escudo, no se sufrieron daños`);
        this.puntosDeVida--;
    }
}