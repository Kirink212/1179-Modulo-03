import Quadrado from "./quadrado.js";
import Triangulo from "./triangulo.js";
import Poligono from "./poligono.js";
// import { Quadrado, Triangulo } from "./formas.js";

type Aluno = {
    nome: string;
    altura: number;
    dataNasc: Date;
    modulosCursados: Array<string>; // string[] ou Array<string>
    ativo?: boolean;
    estudar?: () => void;
    parabenizar?: () => void;
};

let message: string = "Estou usando TYPESCRIPT boladão";
// message = 9; -> typescript vai reclamar

const points: number = 120;
const geralTaComSono: boolean = true;

// É necessário especificar a tipagem dos parâmetros da função
// e IDEALMENTE do retorno da minha função
function sumNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(message);
console.log(sumNumbers(parseInt("12"), 23));

//// Jeito FEI de fazer
// let objAluno: {
//     nome: string;
//     altura: number;
//     dataNasc: Date;
//     modulosCursados: Array<string>; // string[] ou Array<string>
//     ativo?: boolean;
// } = {
//     "nome": "Matheus Quintanilha",
//     "altura": 1.75,
//     "dataNasc": new Date("1995-04-04"),
//     "modulosCursados": ["Frontend Estático", "Lógica de Programação"],
//     "ativo": true
// };

//// Jeito BIITO de fazer
let objAluno: Aluno = {
    "nome": "Matheus Quintanilha",
    "altura": 1.75,
    "dataNasc": new Date("1995-04-04"),
    "modulosCursados": ["Frontend Estático", "Lógica de Programação"],
    "ativo": true
};

if (objAluno.estudar) objAluno.estudar();

objAluno = {
    "nome": "Felipe Garrido",
    "altura": 1.82,
    "dataNasc": new Date("1986-09-11"),
    "modulosCursados": ["Frontend Estático", "Lógica de Programação"],
    estudar: (): void => {
        console.log("Este aluno está estudando...");
    },
};

if (objAluno.estudar) objAluno.estudar();

objAluno = {
    "nome": "Daniel Mariz",
    "altura": 1.79,
    "dataNasc": new Date("1986-09-13"),
    "modulosCursados": ["Frontend Estático", "Lógica de Programação"],
    estudar() {
        console.log(`${this.nome} está estudando...`);
    },
    // estudar: function() {
    //     console.log(`${this.nome} está estudando...`);
    // },
    // estudar: () => {
    //     console.log(`${objAluno.nome} está estudando...`);
    // },
    parabenizar() {
        // se a data de hoje for igual à data de nascimento, deseje feliz aniversário
        const today = new Date();
        const sameDay = today.getDay() == this.dataNasc.getDay();
        const sameMonth = today.getMonth() == this.dataNasc.getMonth();
        if(sameDay && sameMonth) {
            console.log(`Ahá Uhú, ow ${this.nome} vou comer seu bolo!`);
        } else {
            console.log(`Ainda não chegou no seu aniversário...`);
        }
    }
};

console.log(objAluno.nome);

// Interfaces e Classes
console.log("Data de Nascimento:", objAluno.dataNasc.getDay());

console.log("Objeto Aluno:", objAluno);

// Este método existe/foi definido para esta instância de aluno?
if (objAluno.estudar) objAluno.estudar();

if (objAluno.parabenizar) objAluno.parabenizar();

// Classe é a representação em programação orientada a objetos de uma entidade da vida real
// Instância de uma classe é um "indivíduo" que pertence àquela classe
// Propriedades/Atributos de uma classe são as características que definem e ajudam a diferenciar instâncias dessa classe
// Métodos de uma classe são ações desempenhadas pelas instâncias daquela classe
class AlunoClass {
    // Declarando TODAS as propriedades da classe
    nome: string;
    altura: number;
    dataNasc: Date;
    modulosCursados: Array<string>; // string[] ou Array<string>
    ativo?: boolean;

    // O método CONSTRUTOR é o método executado quando criamos uma nova instância da classe
    // Ou seja, quando executarmos new AlunoClass()
    constructor(nome: string, altura: number, dataNasc: string, modulos: Array<string>, ativo: boolean = true) {
        this.nome = nome;
        this.altura = altura;
        this.dataNasc = new Date(dataNasc);
        this.modulosCursados = modulos;
        this.ativo = ativo;
    }

    estudar() {
        console.log(`${this.nome} está estudando...`);
    }

    parabenizar() {
        // se a data de hoje for igual à data de nascimento, deseje feliz aniversário
        const today = new Date();
        const sameDay = today.getDay() == this.dataNasc.getDay();
        const sameMonth = today.getMonth() == this.dataNasc.getMonth();
        if(sameDay && sameMonth) {
            console.log(`Ahá Uhú, ow ${this.nome} vou comer seu bolo!`);
        } else {
            console.log(`Ainda não chegou no seu aniversário...`);
        }
    }
}

// "1997-01-19"
const alunoNovo: AlunoClass = new AlunoClass("Karolyne Carvalho", 1.53, "1997-09-13", ["Frontend Estático", "Lógica de Programação"]);
console.log(alunoNovo);

alunoNovo.parabenizar();
alunoNovo.estudar();

const alunoNovo2: AlunoClass = new AlunoClass("Francisco Cezaniltom", 1.75, "1999-03-18", ["Frontend Estático", "Lógica de Programação"]);
console.log(alunoNovo2);

alunoNovo2.parabenizar();
alunoNovo2.estudar();

alunoNovo2.ativo = false;

const q1 = new Quadrado(20, 20, 200);

// Não é possível acessar ou alterar valores em propriedades privadas de uma classe
// console.log("O lado de q1 é", q1.lado);
// q1.lado = 5;

// console.log("O lado de q1 é", q1.getLado());
// q1.setLado(250);
// console.log("O lado de q1 é", q1.getLado());

console.log("O lado de q1 é", q1.qlado);
q1.qlado = 50;
console.log("O lado de q1 é", q1.qlado);
console.log(Quadrado.total_quads);

const q2 = new Quadrado(100, 30, 300);
console.log(Quadrado.total_quads);

console.log(Quadrado.uniao(q1, q2));

const t1 = new Triangulo(100, 100, 50, 30);
console.log(t1);

const p1 = new Poligono(200, 100, 5); // pentágono
console.log(p1);

const p2 = new Poligono(200, 100, 2); // não existe
console.log(p1);