class Nodo{
    constructor(data, next){
        this.data =data;
        this. next = next;
    }
};
class Lista{

    constructor(){
        this.head = null;
        this.size = 0;


    }
    agregarFinal(datos){
        var nodo = new Nodo(datos, null);
        if (this.head == null)
            this.head = nodo;

        else{
            let actual=this.head;
            while (actual.next){
                actual=actual.next;
            };
            actual.next = nodo;
        }
        this.size++;


}
imprimirLista(){
    if(!this.size)
        return null;
    let actual=this.head;
    let resultado = "";
    while (actual){
        resultado +=actual.data+"->";
        actual=actual.next;
    }
    resultado+="Z";
    return resultado
    
};
agregarInicio(datos){
    var nodo = new Nodo (datos, this.head);
    this.head = nodo;
    this.size++;
};

agregarIndice(datos, indice){
    if(indice <0 || indice > this.size )
        return null; //Vadilacion para saber si está correcto
    var nodo = new Nodo(datos);
    let actual = this.head;
    let anterior;
    if(indice ===0)
        this.agregarInicio(data);
    else{
        for(let i=0; i < indice; i++){
            anterior=actual;
            actual = actual.next;
        }
        anterior.next=nodo;
        nodo.next = actual;
        this.size++;
    }


    };
    removerInicio(){
        if(this.head){
        let actual = this.head;
        this.head = actual.next;
        this.size--;

        }
        //Se podría añadir un caso contrario con algun tipo de mensaje en caso de que no esxista cabeza
    };
    removerFinal(){
        if(this.head){
            let actual=this.head;
            let anterior = null;
            while(actual.next){
                anterior = actual;
                actual=actual.next;

            }
            anterior.next = actual.next;  //null;
            this.size--;
            return actual.data;
        }
    };

    // metodo el cual yo le pase un valor y lo elimine de la lista

    removerDato(dato) {
        if (!this.head) {
            return null; 
        }
        let actual = this.head;
        let anterior = null;
        
        if (actual.data === dato) {
            this.head = actual.next; 
            this.size--;
            return actual.data; 
        }
        while (actual) {
            if (actual.data === dato) {
                anterior.next = actual.next; 
                this.size--;
                return actual.data; 
            }
            anterior = actual;
            actual = actual.next;
        }
    
        return null; 
    }
    

}

const list = new Lista();
list.agregarFinal("hola");
list.agregarFinal("ladra");
list.agregarFinal("viper");
list.agregarFinal("no sé");
list.agregarInicio("HOLA")
list.agregarIndice("Letty",1)





console.log(list.imprimirLista());
list.removerInicio();
list.removerFinal();
list.removerDato("")
console.log(list.imprimirLista());

