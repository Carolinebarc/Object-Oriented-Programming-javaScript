import PromptSync = require ('prompt-sync'); 
import { Aviao } from "./aviao"; 

const prompt = PromptSync ();

const tamanhoA = Number (prompt ('Digite o tamanho do avião, '))
const tamanhoAsa = Number (prompt('Digite o tamanho da asa, '))
const tipoDeMotor = prompt ('Digite o tipo de motor, ')
const velocidaVoo = Number (prompt('digite a velocidade máxima, '))
const aviao =  new Aviao ({
tamanhoA,
tamanhoAsa,
tipoDeMotor, 


}); 

console.log(` O tamanho de aviao ${tamanhoA}, tamanho da Asa é, ${tamanhoAsa}, tipo de motor é, ${tipoDeMotor} esse avião voa na velocidade ${velocidaVoo}`); 

