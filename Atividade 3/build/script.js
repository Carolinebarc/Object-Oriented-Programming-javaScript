"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var eletronics_1 = require("./eletronics");
var prompt = PromptSync();
var energiaE = Boolean(prompt('O eletrônico utiliza energia? '));
var visor = Boolean(prompt('O eletrônico utiliza visor, '));
var preco = prompt('Digite o preço do eletrônico, ');
var tipo = prompt('Qual tipo de eletrônico, ');
var liga = Boolean(prompt('Seu aparelho está ligando'));
var eletronico = new eletronics_1.Eletronico({
    tipo: tipo,
    energiaE: energiaE,
    visor: visor,
    preco: preco
});
console.log("O ararelho eletr\u00F4nico utiliza energia? ".concat(energiaE, ", o eletr\u00F4nico possui visor? ").concat(visor, ", o pre\u00E7o do eletr\u00F4nico \u00E9 ").concat(preco, ", o tipo do eletr\u00F4nico \u00E9 ").concat(tipo));
