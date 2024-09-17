export default class Quadrado {
    x: number;
    y: number;
    lado: number;

    constructor(x: number, y: number, lado: number) {
        this.x = x;
        this.y = y;
        this.lado = lado;
    }

    perimetro() {
        return 4 * this.lado;
    }

    area() {
        return this.lado**2;
    }
}