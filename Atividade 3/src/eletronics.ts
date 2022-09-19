interface NewEletronico {
    energiaE: Boolean; 
    visor: Boolean; 
    preco: number; 
    tipo: string;
  

}
class Eletronico {    // ou export class 
   private energiaE: Boolean; 
   private visor: Boolean; 
   private preco: number; 
   private tipo: string
   private liga: Boolean

   public  get ligar () { 
   return this.liga;
   }

   constructor ({energiaE, visor, preco, tipo}:NewEletronico){ // declarar tipo se não fizer interface

   this.energiaE = energiaE;
   this.visor = visor;
   this.preco = preco;
   this.tipo = tipo; 
   
   }

   public Liga (liga: Boolean) {
   this.liga = liga 
   
   }

 }
 
 export { Eletronico }; 

 