/// <refrence path="../typings/tsd.d.ts"/>

console.log("App Started...");

class Person {
    //private instance variables
    private _name:string;
    
    //constructor function
    constructor(name:string){
        this._name = name;
    }
    
    //public methods
    public speak():void {
        console.log(this._name + " says hello");
    }
}

let chad:Person = new Person("Chad");
chad.speak();