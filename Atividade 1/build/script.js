"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var client_1 = require("./client");
var prompt = PromptSync();
var RG = Number(prompt('Digite seu RG, '));
var CPF = Number(prompt('Digite seu CPF, '));
var Nome = String(prompt('Digite seu Nome, '));
var Client = new client_1.client({
    RG: RG,
    CPF: CPF,
    Nome: Nome,
});
console.log("O nome do cliente \u00E9 ".concat(Nome, ", o cpf: ").concat(CPF, " e o RG \u00E9: ").concat(RG));
