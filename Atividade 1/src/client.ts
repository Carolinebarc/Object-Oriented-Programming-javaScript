interface NewClient {
    RG: number; 
    Nome: string; 
    CPF : number; 

}
class client {    // ou export class 
   private RG: number; 
   private  Nome: string; 
   private  CPF: number; 
  
   constructor ({RG, CPF, Nome}:NewClient){ // declarar tipo se não fizer interface
    // TODO: Criar o construtor 
    this.RG = RG;
    this.CPF = CPF;
    this.Nome = Nome;
  
    }
 

   }


 
 export { client }; 