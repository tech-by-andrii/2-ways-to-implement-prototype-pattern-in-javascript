const prototype = {
    greeting: "Hello!",

    greet: function() {
        console.log(this.greeting);
    },

    clone: function() {
        return Object.create(this);
    },
};

const object = prototype.clone();

object.greet();


/**
 * Modify our object
 */

object.name = "John";

object.greet = function() {
    console.log(this.greeting + " My name is " + this.name);
};

object.greet();
