'use strick'
//
class nodoArbol{
    constructor(valor){
        this.raiz = valor;
        this.izquierda = null;
        this.derecha = null;
    }
    getIzquierdo(){
        return this.izquierda;
    }
    getRaiz(){
        return this.raiz;
    }
    getDerecho(){
        return this.derecha;
    }
    setIzquierda(izquierda) {
		this.izquierda = izquierda;
        }
    setDerecha(derecha) {
        this.derecha = derecha;
        }
}

class arbolApp{
    constructor(){
        this.arbolBinario = new arbolBinario();
        }
        PreOrden(){
            console.log("PreOrden:");
            this.arbolBinario.PreOrden(this.arbolBinario.raiz);
            this.menu();
        }
        InOrden(){
            console.log("InOrden:");
            this.arbolBinario.InOrden(this.arbolBinario.raiz);
            this.menu();
        }
        PostOrden(){
            console.log("PostOrden:");
            this.arbolBinario.PostOrden(this.arbolBinario.raiz);
            this.menu();
        }
        ContarNodos(){
            console.log("Cantidad de Nodos:");
            console.log(this.arbolBinario.ContarNodos(this.arbolBinario.raiz));
            this.menu();
        }
        maximo(){
            console.log("Minimo");
            this.arbolBinario.NodoMaximo(this.arbolBinario.raiz);
            console.log(this.arbolBinario.mini);
            this.menu();
        }
        minimo(){
            console.log("maximo");
            this.arbolBinario.NodoMinimo(this.arbolBinario.raiz);
            console.log(this.arbolBinario.max);
            this.menu();
        }
        buscar(){
            let num = prompt("Ingresé un número a buscar:");
            this.arbolBinario.BuscarNodos(this.arbolBinario.raiz,num);
            if(this.arbolBinario.c>0){
                console.log("El numero " + num +" si existe");
            }
            else{
                console.log("El numero " +num+ " no existe");
            }

        }
        menu() {
            //ciclar el menú
            const option = prompt(`<<Menu>> \n 1.- PreOrden \n 2.- InOrden \n 3.- PostOrden \n 4.- Contar Nodo \n 5.- Nodo Mínimo \n 6.- Nodo Máximo \n 7.- Buscar Nodo \n 8.- Otra tecla para terminar`);
            switch (option) {
                case "1":
                    this.PreOrden();
                    break;
                case "2":
                    this.InOrden();
                    break;
                case "3":
                    this.PostOrden();
                    break;
                case "4":
                    this.ContarNodos();
                    break;
                case "6":
                    this.minimo();
                    break;
                case "5":
                    this.maximo();
                    break;
                case "7":
                    this.buscar();
                    break;
    
            }
        }
    }
class arbolBinario{
    constructor(){
       this.raiz = null;
       this.mini=0;
       this.max=0;
       this.c=0;
       this.Nodos();
    }
    Nodos(){
        const raiz = new nodoArbol(1);
        const nodo2 = new nodoArbol(2);
        const nodo3 = new nodoArbol(3);
        const nodo4 = new nodoArbol(4);
        raiz.setIzquierda(nodo2);
        raiz.setDerecha(nodo3);
        nodo3.setIzquierda(new nodoArbol(5));
        nodo3.setDerecha(new nodoArbol(6));
        nodo2.setIzquierda(nodo4);
        nodo4.setIzquierda(new nodoArbol(7));
        nodo4.setDerecha(new nodoArbol(8));
        this.raiz = raiz;
        this.TotalNodos = 0;
    }
    PreOrden(raiz){
        if(raiz){
            console.log(raiz.getRaiz());
            this.PreOrden(raiz.getIzquierdo());
            this.PreOrden(raiz.getDerecho());
        }
    }
    InOrden(raiz){
        if(raiz){
            this.InOrden(raiz.getIzquierdo());
            console.log(raiz.getRaiz());
            this.InOrden(raiz.getDerecho());
        }
    }
    PostOrden(raiz){
        if(raiz){
            this.PostOrden(raiz.getIzquierdo());
            this.PostOrden(raiz.getDerecho());  
            console.log(raiz.getRaiz());
           
        }
    }
    ContarNodos(raiz){
        if(raiz!==null){
            this.TotalNodos=this.TotalNodos+1;
            this.ContarNodos(raiz.getIzquierdo());
            this.ContarNodos(raiz.getDerecho());
        }
        return this.TotalNodos;
    }
    NodoMinimo(raiz){
      if(raiz){
            if(raiz.getRaiz()>0){
                if(raiz.getRaiz()>this.mini){
                    this.mini=raiz.getRaiz();
                }
                this.NodoMinimo(raiz.getIzquierdo());
                this.NodoMinimo(raiz.getDerecho());
            }

        }
    }

    NodoMaximo(raiz){
         if(raiz){
            if(raiz.getRaiz()>0){
                if(raiz.getRaiz()>this.max){
                    this.max=raiz.getRaiz();
                }
                this.NodoMaximo(raiz.getIzquierdo());
                this.NodoMaximo(raiz.getDerecho());
            }

        } 
    }
    BuscarNodos(raiz,num){
        if(raiz){
            if(raiz.getRaiz()==num){
                this.c++;
            }
            else{
                this.BuscarNodos(raiz.getIzquierdo(),num);
                this.BuscarNodos(raiz.getDerecho(),num);
            }   
        }
    }
}
arbolApp = new arbolApp();
arbolApp.menu();




