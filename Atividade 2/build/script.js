"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var aviao_1 = require("./aviao");
var prompt = PromptSync();
var tamanhoA = Number(prompt('Digite o tamanho do avião, '));
var tamanhoAsa = Number(prompt('Digite o tamanho da asa, '));
var tipoDeMotor = prompt('Digite o tipo de motor, ');
var velocidaVoo = Number(prompt('digite a velocidade máxima'));
var aviao = new aviao_1.Aviao({
    tamanhoA: tamanhoA,
    tamanhoAsa: tamanhoAsa,
    tipoDeMotor: tipoDeMotor,
});
console.log(" O tamanho de aviao ".concat(tamanhoA, ", tamanho da Asa \u00E9, ").concat(tamanhoAsa, ", tipo de motor \u00E9, ").concat(tipoDeMotor, " esse avi\u00E3o voa na velocidade ").concat(velocidaVoo));
