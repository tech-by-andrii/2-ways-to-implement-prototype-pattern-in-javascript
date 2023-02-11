interface Prototype {
    greeting: string;
    greet: () => void;
    clone: () => Prototype;
}

const prototype: Prototype = {
    greeting: "Hello!",
    greet: function() {
        console.log(this.greeting);
    },
    clone: function() {
        return Object.create(this);
    },
};

const object: Prototype = prototype.clone();

object.greet();

/**
 * Modify our object
 */

interface Prototype {
    name: string;
}

object.name = "John";

object.greet = function() {
    console.log(this.greeting + " My name is " + this.name);
};

object.greet();
