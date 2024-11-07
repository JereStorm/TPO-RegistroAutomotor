// Clase base Personaje
export class Personaje {
    protected nombre: string;
    protected nivel: number;
    protected puntosDeVida: number;

    constructor(nombre: string, puntosDeVida: number) {
        this.nombre = nombre;
        this.nivel = 1; // Nivel inicial
        this.puntosDeVida = puntosDeVida;
    }

    public atacar(): void {
        console.log(`${this.nombre} está atacando!`);
    }

    public defender(): void {
        console.log(`${this.nombre} está defendiendo!`);
    }

    public subirNivel(): void {
        this.nivel++;
        console.log(`${this.nombre} ha subido al nivel ${this.nivel}!`);
    }
}