class Prototype {
    greeting = "Hello!";

    greet() {
        console.log(this.greeting);
    }

    clone() {
        return new this.constructor();
    }
}

const object = new Prototype()

object.greet();

/**
 * Modify our object
 */

const cloned = object.clone();

cloned.greeting = "Hi there!";

cloned.greet();
