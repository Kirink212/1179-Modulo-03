export class Quadrado {
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

export class Triangulo {
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