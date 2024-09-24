import Poligono from "./poligono.js";

export default class Quadrado extends Poligono {
    static total_quads: number = 0;
    private lado: number;
    // #lado: number;

    constructor(x: number, y: number, lado: number) {
        super(x, y, 4);
        this.lado = lado;
        Quadrado.total_quads++;
    }

    // getLado() {
    //     return this.lado;
    // }

    // setLado(lado: number) {
    //     if (lado > 200) {
    //         throw new Error("Não é possível alterar o lado para um valor maior que 200!");
    //         // console.error("Não é possível alterar o lado para um valor maior que 200!");
    //         // return;
    //     }
    //     this.lado = lado;
    // }

    get qlado() {
        return this.lado;
    }

    set qlado(lado: number) {
        if (lado > 200) {
            throw new Error("Não é possível alterar o lado para um valor maior que 200!");
        }
        this.lado = lado;
    }

    perimetro() {
        return this.total_lados * this.lado;
    }

    area() {
        return this.lado**2;
    }

    static uniao(q1: Quadrado, q2: Quadrado) {
        return q1.area() + q2.area();
    }
}