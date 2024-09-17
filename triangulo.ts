export default class Triangulo {
    x: number;
    y: number;
    base: number;
    altura: number;

    constructor(x: number, y: number, base: number, altura: number) {
        this.x = x;
        this.y = y;
        this.base = base;
        this.altura = altura;
    }

    perimetro() {
        return 3 * this.base;
    }

    area() {
        return (this.base * this.altura) / 2;
    }
}