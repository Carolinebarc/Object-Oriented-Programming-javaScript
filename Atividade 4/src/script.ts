import PromptSync = require ('prompt-sync'); 
import { Funcionario } from "./funcionario"; 

const prompt = PromptSync ();

const nome = prompt ('Digite o seu nome, ')
const identificacao = Number (prompt('Digite sua identificação, '))
const horadeEntrada = Number (prompt('Digite seu horario de entrada, '))
const horadeSaida = Number (prompt('digite seu horario de saída, '))
const horatrabalhada = Number 


const funcionario =  new Funcionario ({

nome,
identificacao,
horadeEntrada,
horadeSaida, 


}); 

console.log(`O nome do funcionário é, ${nome}, o numero de identificação é ${identificacao}, a hora que o funcionário entrou foi ${horadeEntrada} e seu horario de saída foi ${horadeSaida}`)

