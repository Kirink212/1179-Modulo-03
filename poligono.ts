export default class Poligono {
    x: number;
    y: number;
    total_lados: number;

    constructor(x: number, y: number, total_lados: number) {
        if (total_lados < 3) throw new Error("Não é possível criar polígonos com menos de três lados!");
        this.x = x;
        this.y = y;
        this.total_lados = total_lados;
    }

    somaAngulosInternos() {
        return (this.total_lados - 2) * 180;
    }
};