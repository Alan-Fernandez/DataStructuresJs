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

    insert(index, value){
        if(index >= this.length){
            return this.append(value)
        }
        const newNodo = Nodo(value);
        const firstPointer = this.getTheIndex(index -1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNodo;
        newNodo.next = holdingPointer;
        this.length++;

        return this;
    }

    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next;
            counter ++;
        }

        return currentNode;
    }

    remove(index) {
        const previousPointer = this.getTheIndex(index - 1);
        const holdingPointer = this.getTheIndex(index + 1);
   
        previousPointer.next = holdingPointer;
           
        this.length--;
   
        return this;
   }
}


let myLinkedList = new MySinglyLinkedList(1);