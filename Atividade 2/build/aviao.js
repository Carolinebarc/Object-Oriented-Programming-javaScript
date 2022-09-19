"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aviao = void 0;
var Aviao = /** @class */ (function () {
    function Aviao(_a) {
        var tamanhoA = _a.tamanhoA, tamanhoAsa = _a.tamanhoAsa, tipoDeMotor = _a.tipoDeMotor;
        this.tamanhoA = tamanhoA;
        this.tamanhoAsa = tamanhoAsa;
        this.tipoDeMotor = this.tipoDeMotor;
    }
    Object.defineProperty(Aviao.prototype, "velVoo", {
        get: function () {
            return this.velocidaVoo;
        },
        enumerable: false,
        configurable: true
    });
    Aviao.prototype.voar = function (velocidaVoo) {
        this.velocidaVoo = velocidaVoo;
    };
    return Aviao;
}());
exports.Aviao = Aviao;
