"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronico = void 0;
var Eletronico = /** @class */ (function () {
    function Eletronico(_a) {
        var energiaE = _a.energiaE, visor = _a.visor, preco = _a.preco, tipo = _a.tipo;
        this.energiaE = energiaE;
        this.visor = visor;
        this.preco = preco;
        this.tipo = tipo;
    }
    Object.defineProperty(Eletronico.prototype, "ligar", {
        get: function () {
            return this.liga;
        },
        enumerable: false,
        configurable: true
    });
    Eletronico.prototype.Liga = function (liga) {
        this.liga = liga;
    };
    return Eletronico;
}());
exports.Eletronico = Eletronico;
