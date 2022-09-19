interface NewAviao {
    tamanhoA: number; 
    tamanhoAsa: number; 
    tipoDeMotor: string; 

  

}
class Aviao {    // ou export class 
   private tamanhoA: number; 
   private tamanhoAsa: number; 
   private tipoDeMotor: string; 
   private velocidaVoo: number

   public  get velVoo () { 
   return this.velocidaVoo;
   }

   constructor ({tamanhoA, tamanhoAsa, tipoDeMotor}:NewAviao){ // declarar tipo se não fizer interface

   this.tamanhoA = tamanhoA;
   this.tamanhoAsa = tamanhoAsa;
   this.tipoDeMotor = this.tipoDeMotor;
   
   }

   public voar (velocidaVoo: number) {
   this.velocidaVoo = velocidaVoo; 
   
   }

 }
 
 export { Aviao }; 

 