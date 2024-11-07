import { Arquero } from "./Arquero";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago";

// Ejemplo de uso
const mago = new Mago('Gandalf', 10, 1);
const luchador = new Luchador('Goku', 15, 6);
const arquero = new Arquero('Legolas', 12, 3);

mago.lanzarHechizo();
luchador.golpear();
mago.defender();
arquero.dispararFlecha();
arquero.defender();

