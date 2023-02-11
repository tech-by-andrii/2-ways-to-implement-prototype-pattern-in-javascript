class Prototype {
    greeting: string = "Hello!";

    greet(): void {
        console.log(this.greeting);
    }

    clone(): Prototype {
        return new Prototype();
    }
}

const object: Prototype = new Prototype();

object.greet();

/**
 * Modify our object
 */

const cloned: Prototype = object.clone();

cloned.greeting = "Hi there!";

cloned.greet();

/**
 * Add properties
 */

interface Prototype {
    farewell: () => void;
}

const withNewProperties: Prototype = object.clone();

withNewProperties.farewell = function(): void {
    console.log('Bye')
}
