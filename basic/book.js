class Book{
    constructor(title, author, year){
        this.title= title;
        this.author= author;
        this.year=year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book1= new Book("summer love", "subin bhattarai", 2012);
console.log(book1.getSummary());