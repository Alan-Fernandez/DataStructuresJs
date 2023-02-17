// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next:{
//                 value: 3,
//                 next: null,
//             }
//         }
//     }
// }

class Nodo {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList{
    constructor(value){
        this.head = {
            value:value,
            next : null,
        };

        this.tatil = this.head;

        this.length = 1;
    }

    append(value){
        const newNodo = new Nodo(value);
        this.tatil.next = newNodo;
        this.tatil = newNodo;
        this.length++;
        
        return this;
    }
}


let myLinkedList = new MySinglyLinkedList(1);