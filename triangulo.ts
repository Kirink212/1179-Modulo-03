import Poligono from "./poligono";

export default class Triangulo extends Poligono {
    base: number;
    altura: number;

    constructor(x: number, y: number, base: number, altura: number) {
        super(x, y, 3);
        this.base = base;
        this.altura = altura;
    }

    perimetro() {
        return this.total_lados * this.base;
    }

    area() {
        return (this.base * this.altura) / 2;
    }
}