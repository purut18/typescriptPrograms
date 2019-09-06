export class NewPoint {
    constructor(private x?: number, public y?:number) {
        this.x = x;
        this.y = y;
    }

    newDraw() {
        console.log(`New X: ${this.x} and New Y: ${this.y}`);
    }

    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0)
            throw new Error('value cant be less than 0');

        this.x = value;
    }
}
