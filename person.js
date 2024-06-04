

class Person{
    constructor(name){
        this.name=name;
    }

    getName(){
        return `O meu nome é ${this.name}`
    }
}

module.exports ={
    Person,
}