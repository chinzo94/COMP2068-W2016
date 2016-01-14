/// <refrence path="../typings/tsd.d.ts"/>
console.log("App Started...");
var Person = (function () {
    //constructor function
    function Person(name) {
        this._name = name;
    }
    //public methods
    Person.prototype.speak = function () {
        console.log(this._name + " says hello");
    };
    return Person;
})();
var chad = new Person("Chad");
chad.speak();
//# sourceMappingURL=app.js.map