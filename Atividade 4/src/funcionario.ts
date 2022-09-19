interface NewFuncionario {
    nome: string; 
    identificacao: number; 
    horadeEntrada: number; 
    horadeSaida: number;
   
}
class Funcionario {    // ou export class 
   private nome : string; 
   private identificacao: number; 
   private horadeEntrada: number; 
   private horadeSaida : number; 
   private horastrabalhadas: number = 0; 

   public  get expediente () {
   return this.horastrabalhadas;
   }

   constructor ({nome, identificacao, horadeEntrada,horadeSaida}:NewFuncionario){ 
   // TODO: Criar o construtor 
   this.nome = nome;
   this.identificacao = identificacao;
   this.horadeEntrada = horadeEntrada;
   this.horadeSaida = horadeSaida; 
   this.horastrabalhadas = this.horastrabalhadas;
   }

   Expediente (horastrabalhadas: number) {
   this.horastrabalhadas = horastrabalhadas; 
   
   }

 }
 
 export { Funcionario }; 
