class Cola{
    constructor(){
        this.item={};
        this.cabeza=0;
        this.fin =0;
    }

    encolar(valor){
        this.item[this.fin] = valor;
        this.fin ++;

    }
    desencolar(){
        let valorExtraido;
        if(this.fin===this.cabeza)
            return null;
        valorExtraido=this.item[this.cabeza]
        this.cabeza ++;
        return valorExtraido;

    };
    imprimirCola(){
        //verificar si la cola está vacia
    let resultado="";

    for(let i = this.cabeza;i < this.fin;i++)
    {
        resultado+=this.item[i]+ " -";
    }
    return resultado;
    }

    ///Crear metodo que me indique si la cola está vacia
    colaVacia(){
        if (this.fin === this.cabeza)
            return true
        else 
        return false
    }



    //Crear metodo que me indique el tamaño de la cola

    ColaTamano(){
        return this.fin  - this.cabeza;
    }
}


const cola1 = new Cola;
cola1.encolar("Foo Fighter");
cola1.encolar("Guns n Roses");
cola1.encolar("Nirvana");
console.log(cola1.imprimirCola());
console.log(cola1.colaVacia());
console.log(cola1.ColaTamano());

