class Nodo{

    constructor(data, next, prev){
        this.data= data;
        this.next = next;
        this.prev = prev;

    }

};

class ListasCD{

    constructor(){

    this.head = null;
    this.tail = null;
    this.size = 0;

    }

    agregarInicio(data){

        var nodo = new Nodo(data,null,null); //Creamos el nodo
        if (!this.head){  //Validamos si existen elementos en la lista
            this.head = nodo;
            this.tail = nodo;
            nodo.next = this.tail;
            nodo.prev = this.head;
        }else{
            nodo.next = this.head;
            nodo.prev = this.tail;
            this.head.prev = nodo;
            this.tail.next = nodo;
            this.head = nodo;





        }
        this.size++;
    }
    imprimir(){
        if(!this.size)
            return null;
        let aux = this.head;
        let resultado = "";
        do{
            resultado+=aux.data + " <-> ";
            aux=aux.next;

        }while(aux !==this.head)
            return resultado;
        }

        imprimirReversa() {
            if (!this.size) {
                return null; 
            }
            let act = this.tail; 
            let resultado = "";
            do {
                resultado += act.data + " <-> ";
                act = act.prev; 
            } while (act !== this.tail); 
            return resultado ;
        }

        agregarFinal(data){
            var nodo= new Nodo(data, null, null); //se crea el nodo
            if (!this.head){ // validamos si existen elementos en la lista
                this.head=nodo;
                this.tail=nodo;
                nodo.next=this.tail;
                nodo.prev=this.head;
            }else{

                nodo.next=this.head;
                nodo.prev=this.tail;
                this.tail.next=nodo;
                this.head.prev=nodo;
                this.tail=nodo;
            }
            this.size++;
        }

        agregarIndice(data, indice){

            if(indice<0||indice>this.size)
                return null;

            var nodo= new Nodo(data, null, null);
            let actual= this.head;
            let anterior;
            if(indice===0)
                this.agregarInicio(data);
            if(indice===this.size-1)
                this.agregarFinal(data);
            else{
                for(let i=0;i<indice;i++){
                    anterior=actual;
                    actual=actual.next;
                }
                nodo.next=actual;
                anterior.next=nodo;
                actual.prev=nodo;
                nodo.prev=anterior
                this.size++
            }
        }

        RemoverInicio(){
            if(this.head)
                if(this.head===this.tail){
                    this.head=null;
                    this.tail= null;


                }else{
                    this.tail.next=this.head.next;
                    this.head=this.head.next;
                    this.head.prev = this.tail;

                }
                this.size--;
            }

            //Realiazr algoritmo de remover al final
            RemoverFinal(){
                if(this.tail)
                    if(this.tail===this.head){
                        this.tail=null;
                        this.head= null;
    
    
                    }else{
                        this.head.prev=this.tail.prev;
                        this.tail=this.tail.prev;
                        this.tail.next = this.head;
    
                    }
                    this.size--;
                }

                removerValor(valorAEliminar){
                    if (!this.head) {
                        return; 
                    }
                
                    let actual = this.head;
                    let anterior = null;
                
                    do {
                        
                        if (actual.data === valorAEliminar) {
                            if (actual === this.head) {
                                
                                this.removerInicio();
                            } else if (actual === this.tail) {
                                
                                this.removerFinal();
                            } else {
                               
                                anterior.next = actual.next; 
                                actual.next.prev = anterior; 
                                this.size--; 
                            }
                            return; 
                        }
                
                        
                        anterior = actual;
                        actual = actual.next;
                
                    } while (actual !== this.head); 
                }

                //Remover por indice 
                removerPorIndice(indice) {
                    if (indice < 0 || indice >= this.size) {
                        return null; 
                    }
                
                    
                    if (indice === 0) {
                        this.RemoverInicio(); 
                        return;
                    }
                
                    
                    if (indice === this.size - 1) {
                        this.RemoverFinal(); 
                        return;
                    }
                
                  
                    let actual = this.head;
                    let anterior = null;
                
                    
                    for (let i = 0; i < indice; i++) {
                        anterior = actual;
                        actual = actual.next;
                    }
                
                   
                    anterior.next = actual.next; 
                    actual.next.prev = anterior; 
                
                    
                    this.size--;
                }
                

            
                
    }

        
        
       
    










    const lista= new ListasCD();
    lista.agregarInicio("Interstellar");
    lista.agregarInicio("Scary Movie");
    lista.agregarInicio("La que me hice");
    console.log(lista.imprimir());
    console.log(lista.imprimirReversa());
    lista.agregarFinal("Titanic");
    console.log(lista.imprimir());
    console.log(lista.imprimirReversa());
    lista.agregarIndice("Space Jam", 2);
    console.log(lista.imprimir());
    console.log(lista.imprimirReversa());
    lista.RemoverInicio();
    console.log(lista.imprimir());
    console.log(lista.imprimirReversa());
    lista.RemoverFinal();
    console.log(lista.imprimir());
    console.log(lista.imprimirReversa());
    lista.removerValor("Space Jam");
    console.log(lista.imprimir());
    console.log(lista.imprimirReversa());
    lista.removerPorIndice(0);
    console.log(lista.imprimir());
    console.log(lista.imprimirReversa());

   


