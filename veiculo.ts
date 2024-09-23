type Combustivel = "gasolina" | "alcool" | "gnv" | "diesel";
type TipoCambio = "auto" | "manual";

class Veiculo {
    numero_rodas: number;
    marca: string;
    cor: string;
    velocidade_maxima: number;
    combustivel?: Combustivel;

    constructor(numero_rodas: number, marca: string, cor: string, velocidade_maxima: number, combustivel: Combustivel = "gasolina") {
        this.numero_rodas = numero_rodas;
        this.marca = marca;
        this.cor = cor;
        this.velocidade_maxima = velocidade_maxima;
        this.combustivel = combustivel;
    }

    emitir_som() {
        console.log("Zuuuuuuummm");
    }
}

class Carro extends Veiculo {
    numero_portas: number;
    tipo_cambio: TipoCambio;

    constructor(marca: string, cor: string, velocidade_maxima: number, numero_portas: number, tipo_cambio: TipoCambio, combustivel: Combustivel = "gasolina") {
        super(4, marca, cor, velocidade_maxima, combustivel);
        this.numero_portas = numero_portas;
        this.tipo_cambio = tipo_cambio;
    }

    emitir_som() {
        console.log("Vruuuuuuummmmm");
    }
}


class Moto extends Veiculo {
    tipo_cambio: TipoCambio;
    possui_bau: boolean;

    constructor(marca: string, cor: string, velocidade_maxima: number, tipo_cambio: TipoCambio, possui_bau: boolean = false, combustivel: Combustivel = "gasolina") {
        super(2, marca, cor, velocidade_maxima, combustivel);
        this.possui_bau = possui_bau;
        this.tipo_cambio = tipo_cambio;
    }

    // Exemplo de polimorfismo
    emitir_som() {
        alert("randandandandandan");
    }
}

const c1 = new Carro("Fiat Uno", "prata", 200, 4, "manual");
c1.emitir_som();

const m1 = new Moto("Yamaha", "preta", 250, "manual");
m1.emitir_som();