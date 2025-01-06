class Nodo{

    constructor(data, next, prev){
        this.data= data;
        this.next = next;
        this.prev = prev;

    }

};

class ListasD{

    constructor(){
        this.head = null;
        this.tail = null;
    
        this.size = 0;

    }

    AgregarInicio(datos){
        var nodo = new Nodo(datos, null,null); // se envian al contrustor los valores de datos siguientes y anterior

        if (this.head){
            this.head.prev= nodo;
            nodo.next= this.head;
            this.head = nodo;



        } else{
            this.head = nodo;
            this.tail = nodo;
        }
        this.size++;

    }

    agregarFinal(datos){
        var nodo = new Nodo(datos, null, null);
        if (this.tail){
            this.tail.next = nodo
            nodo.prev = this.tail;

        }
        else {
            this.head = nodo;
            this.tail = nodo;
        }

    }

    agregarIndice(datos, indice){
        if (indice <0 || indice > this.size)  // validar que el indice sea correcto
            return "Indice no válido"

        var nodo = new Nodo(datos, null, null); // Creamos el nuevo nodo a  agregar
        let actual= this.head;   // Creamos variables auxiliare para recorrer el for
        let anterior;  // Variable auxiliar que ayudara a ingresar el nuevo nodo

        // Se crean dos variables auxiliares para manejar de mejor forma el recorrido si se agrega un nuevo nodo


        if (indice == 0){  //condicion para validar caso de ingreso a la primera posicion
            this.AgregarInicio(datos);
        }else{

            for(let i = 0; i < indice; i++){   // Iniciamos bucle para recorrer

            
                anterior = actual;
                actual = actual.next;
    
            }
            nodo.next = actual;
            anterior.next = nodo;
            actual.prev = nodo;
            nodo.prev = anterior;
    
            this.size++;

        }

        
    };

    imprimir(){
        let act=this.head;
        let resultad = " Inicio <-> ";
        while (act){
            resultad+=act.data + " <-> ";
            act = act.next;
        }

        return resultad + " FIN ";


    }



    // Crear metodo para imprimir en reversa la lista
    ImprimirReversa(){
        let act=this.tail;
        let resultad = " Inicio <-> ";
        while (act){
            resultad+=act.data + " <-> ";
            act = act.prev;
        }

        return resultad + " FIN ";


    }

    // crear metodo que indique si está vacia la lista
    Lisvacia() {
        return this.size === 0;
    }

    // crear metodo de tamaño de la lista
    TamanoList(){
        return this.size;

    }

    removerInicio(){
        if(this.head){
            let actual=this.head;
            if(this.head===this.tall){
                this.head=null;
                this.tall=null;
            }else{
                this.head=this.head.next;
                this.head.prev=null;
            }
            this.size--;
            return actual.data;
        }
    }

    removerFinal(){
        if(this.tail){
            let actual=this.tail;
            if(this.head===this.tall){
                this.head=null;
                this.tail=null;
            }else{
                this.tail=this.tail.prev;
                this.tail.next=null;
            }
            this.size--;
            return actual.data;
        }
    }




};



var listad = new ListasD
listad.AgregarInicio("Ecuador");
listad.AgregarInicio("Argentina");
listad.AgregarInicio("cerru");
listad.AgregarInicio("Venezuela");
listad.agregarFinal("Paraguay(?)")
listad.agregarIndice("Colombia",0)
console.log(listad.imprimir())
console.log(listad.ImprimirReversa())
console.log(listad.TamanoList())
console.log(listad.Lisvacia())
console.log(listad.removerInicio())
console.log(listad.removerFinal())
listad;




    
