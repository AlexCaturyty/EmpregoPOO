"use strict";
class Comissionado extends Empregado {
    constructor(nome, sobrenome, cpf, totalVenda, taxaComissao) {
        super(nome, sobrenome, cpf);
        this.totalVenda = totalVenda;
        this.taxaComissao = taxaComissao;
    }
    vencimento() {
        return this.totalVenda * this.taxaComissao;
    }
}
//# sourceMappingURL=Comissionado.js.map