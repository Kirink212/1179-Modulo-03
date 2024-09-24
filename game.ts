interface IAtirar {
    totalProjeteis: number;
    atirar: () => void;
    recarregar: () => void;
    trocarArma: () => void;
}

interface IPular {
    altura: number;
    pular: () => void;
}

class Jogador implements IAtirar, IPular {
    totalProjeteis: number = 200;
    altura: number = 20;

    atirar() {}

    recarregar(){}

    trocarArma(){}

    pular(){}
}

class Inimigo implements IAtirar {
    totalProjeteis: number = 500;

    atirar() {}

    recarregar(){}

    trocarArma(){}
}

class Torre implements IAtirar {
    totalProjeteis: number = 1500;

    atirar() {}

    recarregar(){}

    trocarArma(){}
}