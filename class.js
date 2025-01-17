class Person{
    constructor(name, age)
{
    this.name=name;
    this.age=age;
}
 display(){
    console.log('HI, My name is: '+this.name+' and My age is: '+this.age);
}

}

let person1= new Person("jhon", 25);
person1.display();