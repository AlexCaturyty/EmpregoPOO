"use strict";
class Assalariado extends Empregado {
    constructor(nome, sobrenome, cpf, salario) {
        super(nome, sobrenome, cpf);
        this.salario = salario;
    }
    vencimento() {
        return this.salario;
    }
}
//# sourceMappingURL=Assalariado.js.map