export default class Prototype {
    greeting: string = "Hello!";

    greet(): void {
        console.log(this.greeting);
    }

    clone(): Prototype {
        return new Prototype();
    }
}
