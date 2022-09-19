"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(_a) {
        var nome = _a.nome, identificacao = _a.identificacao, horadeEntrada = _a.horadeEntrada, horadeSaida = _a.horadeSaida;
        this.horastrabalhadas = 0;
        // TODO: Criar o construtor 
        this.nome = nome;
        this.identificacao = identificacao;
        this.horadeEntrada = horadeEntrada;
        this.horadeSaida = horadeSaida;
        this.horastrabalhadas = this.horastrabalhadas;
    }
    Object.defineProperty(Funcionario.prototype, "expediente", {
        get: function () {
            return this.horastrabalhadas;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.fatiar = function (horastrabalhadas) {
        this.horastrabalhadas = horastrabalhadas;
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
