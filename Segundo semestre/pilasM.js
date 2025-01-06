class Pila{

    constructor(){
        this.item={};
        this.top=0;

    }
    push(valor){
        this.item[this.top]=valor;
        this.top++;
    }
    printPila(){

        if(this.top==0)
            return "no hay elementos en la pila!"
        let resultado ="";
        for(let i=this.top-1; i>=0;i--){
            resultado+=this.item[i]+" ";
        }
        return resultado;

    }
    pop(){
        let valorExtraido;
        if(this.top){
            valorExtraido=this.item[this.top]
            delete this.item[this.top];
            this.top--;
        }
        return valorExtraido; 
    }
    //tamaño de la pila
    size(){
        return this.top;
    }
    
    //si la pila esta vacia
    isEmpty(){
        if (this.top == 0){
            return true ;
        }else{
            return false ;
        }
    }  
    };
    function caracteresEnPila(cadena){
    let pila1=new Pila();
        for(char of cadena ){
            pila1.push(char);
        }
        console.log(pila1.printPila()); 

        
    }
    function cadenaInversa(cadena){
        let pila1=new Pila();
        
        let resultado="";
        
        for(char of cadena ){
            pila1.push(char);
    }
        while(!pila1.isEmpty ()){
            resultado+=pila1.pop();
        }

    
        }
    function parentesisBalanceado(cadena){
    let pila1 = new Pila();
        for (char of cadena){
            if(char=="(")
                    pila1.push(char);
            else if (char ==")"){
                if(pila1.isEmpty())
                    return false;
                    pila1.pop()
        }
    return pila1.isEmpty();  
    }
}
function funcionDeAlerta(){
    alert("Se presionó el boton de funcion de alerta");
}

function VerificacionParentesis(){
    let  cadena = prompt("Ingrese una cadena de caracteres");
}

function Cadena(){
    let datos= prompt ("Ingrese una cadena de caracteres");
    let salida = parentesisBalanceado(datos);
    alert("Parentesis balanceado"+ salida);
}

   


const pila = new Pila();
pila.push("valor 1");
pila.push("valor 2");
pila.pop();
console.log(pila.printPila());
console.log(pila.pop());
caracteresEnPila("estudiantes estructura de datos!")
console.log(cadenaInversa("Estructura de datos"));
console.log(parentesisBalanceado("gaggd"));