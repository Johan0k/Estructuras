class Nodo {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class ListaCS {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    agregarFinal(datos) {
        var nodo = new Nodo(datos, null);

        if (this.head === null) {
            this.head = nodo;
            nodo.next = this.head; 
        } else {
            let aux = this.head;
            while (aux.next !== this.head) {
                aux = aux.next; 
            }
            aux.next = nodo;
            nodo.next = this.head; 
        }
        this.size++;
    }

    
    agregarInicio(datos) {
        var nodo = new Nodo(datos, null);

        if (this.head == null) {
            this.head = nodo;
            nodo.next = nodo; 
        } else {
            let actual = this.head;
            while (actual.next != this.head) {
                actual = actual.next; 
            }
            actual.next = nodo; 
            nodo.next = this.head; 
            this.head = nodo; 
        }
    }


    imprimirLista() {
        if (!this.head) return null;

        let actual = this.head;
        let s = "";
        do {
            s += actual.data + " -> "; 
            actual = actual.next; 
        } while (actual !== this.head); 
        return s;
    }

   
    vacio() {
        return this.size === 0;
    }

   
    temario() {
        return this.size;
    }

   
    removerInicio() {
        if (this.head) {
            if (this.head === this.head.next) {
                this.head = null; 
            } else {
                let actual = this.head;
                while (actual.next !== this.head) {
                    actual = actual.next; 
                }
                actual.next = this.head.next; 
                this.head = this.head.next; 
            }
            this.size--;
        }
    }


    removerFinal() {
        if (this.head) {
            if (this.head === this.head.next) {
                this.head = null; 
            } else {
                let actual = this.head;
                let aux = null;
                while (actual.next !== this.head) {
                    aux = actual;
                    actual = actual.next; 
                }
                aux.next = this.head; 
            }
            this.size--;
        }
    }

    
    removerValor(valor) {
        let actual = this.head;
        let anterior = null;
        do {
            if (actual.data === valor) {
                if (actual === this.head) {
                    return this.removerInicio(); 
                } else {
                    anterior.next = actual.next; 
                    this.size--;
                    return actual.data; 
                }
            }
            anterior = actual;
            actual = actual.next;
        } while (actual !== this.head);
        return null; 
    }

   
    removerPorIndice(indice) {
        if (indice < 0 || indice >= this.size) {
            return null; 
        }

        if (indice === 0) {
            return this.removerInicio(); 
        }

        let actual = this.head;
        let anterior = null;
        let count = 0;


        while (count < indice) {
            anterior = actual;
            actual = actual.next;
            count++;
        }

       
        if (actual !== this.head) {
            anterior.next = actual.next; 
            this.size--;
            return actual.data; 
        }

        return null; 
    }
}


const circular = new ListaCS;
circular.agregarFinal("Friends");
circular.agregarFinal("Lost");
circular.agregarFinal("breaking bad");
circular.agregarFinal("the office");
circular.agregarFinal("hora de aventura");
circular.agregarFinal("My little ponny");
circular.agregarFinal("That 70 show");
circular;
console.log(circular.imprimirLista())
circular.removerInicio();
circular.removerInicio();
console.log(circular.imprimirLista())
circular.removerFinal();

circular.removerValor("breaking bad")

circular.removerPorIndice(1)

console.log(circular.imprimirLista())


