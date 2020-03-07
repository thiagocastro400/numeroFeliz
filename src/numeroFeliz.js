export class NumeroFeliz {
    somarQuadrado(n){
        let sum = 0;
        while(n){
            sum += (n%10)*(n%10);
            n = Math.floor(n/10);
        }
    return sum;
    }
    eFeliz(num){
        let array = [];
        let feliz = false;
        let jaExiste = false;
        while(1){
        if(array.includes(num)){
            jaExiste = true;
            break;
        }

        array.push(num);
        let valor = this.somarQuadrado(num);
        if(valor == 1){
            feliz = true;
            break;
        }
        num = valor;
    }
    if(jaExiste){
        return "Numero não é feliz";
    }
    if(feliz){
        return "O numero é feliz"
    } 
  }
}

