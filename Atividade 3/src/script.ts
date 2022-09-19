import PromptSync = require ('prompt-sync'); 
import { Eletronico }  from "./eletronics"; 

const prompt = PromptSync ();

const energiaE= Boolean (prompt ('O eletrônico utiliza energia? '))
const visor = Boolean (prompt('O eletrônico utiliza visor, '))
const preco = prompt ('Digite o preço do eletrônico, ')
const tipo = prompt ('Qual tipo de eletrônico, ')
const liga = Boolean (prompt ('Seu aparelho está ligando'))

const eletronico = new Eletronico ({

tipo,
energiaE,
visor,
preco



}); 

console.log(`O ararelho eletrônico utiliza energia? ${energiaE}, o eletrônico possui visor? ${visor}, o preço do eletrônico é ${preco}, o tipo do eletrônico é ${tipo}`); 

