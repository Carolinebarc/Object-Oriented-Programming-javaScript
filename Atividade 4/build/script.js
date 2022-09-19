"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var funcionario_1 = require("./funcionario");
var prompt = PromptSync();
var nome = prompt('Digite o seu nome, ');
var identificacao = Number(prompt('Digite sua identificação, '));
var horadeEntrada = Number(prompt('Digite seu horario de entrada, '));
var horadeSaida = Number(prompt('digite seu horario de saída, '));
var horatrabalhada = Number;
var funcionario = new funcionario_1.Funcionario({
    nome: nome,
    identificacao: identificacao,
    horadeEntrada: horadeEntrada,
    horadeSaida: horadeSaida,
});
console.log("O nome do funcion\u00E1rio \u00E9, ".concat(nome, ", o numero de identifica\u00E7\u00E3o \u00E9 ").concat(identificacao, ", a hora que o funcion\u00E1rio entrou foi ").concat(horadeEntrada, " e seu horario de sa\u00EDda foi ").concat(horadeSaida));
