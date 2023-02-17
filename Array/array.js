class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop(){
        
    }
}

const myArray = new MyArray();

myArray.push('pedro');
myArray.push('juan');

console.log(myArray.get(1));

