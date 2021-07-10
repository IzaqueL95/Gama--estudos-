class Book{
        

    constructor(title, author, pages){
        
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    read(){
        return `Estou lendo ${this.title}`
    }
}




class ItBook extends Book {
    constructor(title,author,pages, technology){
        super(title,author,pages);
        this.technology = technology;


    }
}

class Person {
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;

        
    }

    set name(value){
        this._name = value;
    }
}

let person = new Person('izaque')
person.name = 'Liborio'
console.log(person.name)


/*
let itBook = new ItBook('A lógica de programação', 'Rubert', '300','Algoritimos')

let book = new Book('A lógica do cisne negro', 'Nassim nicolas Taleb', '340');
let otherBook = new Book('Pai rico pai pobre', 'Robert Kyosaki','300')

console.log(itBook.read())
console.log(otherBook.read())
console.log(book, otherBook,itBook)
*/