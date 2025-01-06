class Pila{

constructor(){
    this.item={};
    this.top=0;
}

push(valor){
    this.item[this.top] = valor;
    this.top++;
}


printPila(){
    if(this.top==0)
        return "No hay elementos en la Pila";
    let resultado = "";
    for(let i = this.top-1; i >=0; i--){
        resultado+=this.item[i]+" ";
    }
   return resultado;
}

pop(){
    let valorExtraido;
    if(this.top){
        valorExtraido=this.item[this.top-1];
        delete this.item[this.top-1]
        this.top--;
    }
    return valorExtraido;
}

//Tamaño de la pila
size(){
    
    return this.top;
}
//Si la pila está vacia
//Si la pila esta vacia true
//Si la pila está vacia false
empty(){
    if (this.top ==0){
        return "Esta vacia"
    }else{
        return "no está vacio"
    }

    }

peek(){
    if(this.top!=0)
        return this.item[this.top-1];
    else
    return "No estas en tu peek";

}

};


function caracteresEnPila(cadena){
    let pila1= new Pila();

        for (char of cadena){
        pila1.push(char);
    }
console.log(pila1.printPila());
}

function cadenaInversa(){
    let pila1= new Pila();
    let resultado;

    for (char of cadena){
    pila1.push(char);

    }
    while(!pila.isEmpty()){
        pila2.push (pila1.pop());
    }
    return resultado;
}
















const pila = new Pila();
pila.push("Valor 1");
pila.push("valor 2");
pila.push("valor 3");
pila.push("valor 4");
pila.push("valor 5");








pila.peek();
pila.size();
pila.pop();
pila.empty();





console.log(pila.peek());
console.log(pila.size())
console.log(pila.printPila());
console.log(pila.pop());
console.log(pila.empty());
console.log(pila.peek());
caracteresEnPila("Amen");
 