import PromptSync = require ('prompt-sync'); 
import { client } from "./client"; 

const prompt = PromptSync ();

const RG = Number (prompt ('Digite seu RG, '));

const CPF = Number (prompt ('Digite seu CPF, '));


const Nome = String (prompt ('Digite seu Nome, '));

const Client = new client ({
    RG,
    CPF,
    Nome,

}); 

console.log(`O nome do cliente é ${Nome}, o cpf: ${CPF} e o RG é: ${RG}`)
