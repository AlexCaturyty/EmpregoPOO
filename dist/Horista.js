"use strict";
class Horista extends Empregado {
    constructor(nome, sobrenome, cpf, precoHora, horasTrabalhadas) {
        super(nome, sobrenome, cpf);
        this.precoHora = precoHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    vencimento() {
        return this.precoHora * this.horasTrabalhadas;
    }
}
//# sourceMappingURL=Horista.js.map