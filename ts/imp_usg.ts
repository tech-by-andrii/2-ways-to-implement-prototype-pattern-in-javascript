import Prototype from "./imp"

interface Modified extends Prototype {
    farewell: () => void;
}

const prototype: Prototype = new Prototype();

const cloned: Modified = <Modified>prototype.clone();

cloned.farewell = function(): void {
    console.log('Bye')
}
